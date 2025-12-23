import Cookies from "js-cookie";
import { getTime, getYear, getMonth, getDate, getDay, getHours, getMinutes, addSeconds, parse } from "date-fns";

import { formatTimeUnits, getTimeSummaryFromSeconds, pickFromNumberRange, pickRandomFromArray, pickUniquesFromArray } from "./utils";
import { readFlightCookies, writeFlightCookies } from "./cookie-checker";

// --- AUXILIARY FUNCTIONS ---

function getFlightsPerDate(routeInfo, date) {
    const { daily, weekly, monthly } = routeInfo.frequency;

    // Determine if there is flight availability for the selected departure month
    const targetedFlightMonth = getMonth(date);
    if (!(monthly.includes(targetedFlightMonth))) {
        return null;
    }

    // Determine if there is flight availability for the selected departure day of the week
    const targetedFlightDay = getDay(date);
    if (!(weekly.includes(targetedFlightDay))) {
        return null;
    }

    // Randomly select number of available flights for the selected date
    let potentialFlightOccurrences = [];
    for (let i = daily.min; i <= daily.max; i++) {
        potentialFlightOccurrences.push(i);
    }
    const flightOccurrences = pickRandomFromArray(potentialFlightOccurrences);
    
    // Randomly pick the exact selection of available flights
    const flights = pickUniquesFromArray(routeInfo.flight_profiles, flightOccurrences)

    // Return the selection ordered from earlier departure to later departure
    return flights.sort((a, b) => {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        return 0;
    });
}

function addCommonData(allFlights, origin, destination, departureDate) {
    const departureDay = getDate(departureDate);
    const departureMonth = getMonth(departureDate) + 1;
    const departureYear = getYear(departureDate);
    
    return allFlights.map((el) => {
        return { ...el, origin, destination, mode: 'direct', departure_date: `${departureDay}/${departureMonth}/${departureYear}` };
    })
}

function calculateFlightDurations(allFlights, durationInfo, departureDate) {
    return allFlights.map((el) => {
        const durationInSeconds = pickFromNumberRange(durationInfo.min.overall_seconds, durationInfo.max.overall_seconds);
        departureDate.setHours(el.departure_time.match(/\d+(?=:)/)[0]);
        departureDate.setMinutes(el.departure_time.match(/(?<=:)\d+/)[0]);
        const arrivalDate = getTime(addSeconds(departureDate, durationInSeconds));

        const arrivalDay = getDate(arrivalDate);
        const arrivalMonth = getMonth(arrivalDate) + 1;
        const arrivalYear = getYear(arrivalDate);
        const arrivalHour = getHours(arrivalDate);
        const arrivalMinute = getMinutes(arrivalDate);

        return { 
            ...el, 
            duration: getTimeSummaryFromSeconds(durationInSeconds), 
            arrival_date: `${arrivalDay}/${arrivalMonth}/${arrivalYear}`,
            arrival_time: `${formatTimeUnits(arrivalHour)}:${formatTimeUnits(arrivalMinute)}`
        };
    })
}

function calculateFlightPrices(allFlights, priceInfo) {
    return allFlights.map((el) => {
        const price = pickFromNumberRange(priceInfo.min, priceInfo.max);
        const decimals = pickRandomFromArray(priceInfo.rounding_options);

        return { ...el, price: `${price},${decimals}`};
    })
}

function determineVessels(allFlights, allVessels) {
    return allFlights.map((el) => {
        if (allVessels.length === 1) return { ...el, vessel: allVessels[0] };
        return { ...el, vessel: pickRandomFromArray(allVessels) };
    })
}

function determineOperators(allFlights, allOperators) {
    const csFillArray = new Array(allOperators?.length).fill("Comet Spaceways");
    
    return allFlights.map((el) => {
        if (!allOperators) return { ...el, operator: "Comet Spaceways" };
        return { ...el, operator: pickRandomFromArray(csFillArray.concat(allOperators).concat(csFillArray)) };
    })
}

function determineAlternateRoutings(alternatives) {
    const randomChance = pickRandomFromArray([true, false, true]);
    if (!randomChance) {
        return null;
    }

    let alternativesAmount = [];
    for (let i=1; i <= alternatives.length; i++) {
        alternativesAmount.push(i)
    }
    
    const routingsOccurrence = pickRandomFromArray(alternativesAmount);
    return pickUniquesFromArray(alternatives, routingsOccurrence)
}

function checkSegmentsCoherence(outboundOptions, inboundSelection) {
    const coherentOptions = outboundOptions.filter((option) => {
        const optionParsedArrivalDate = parse(option.arrival_date, 'dd/MM/yyyy', new Date());
        return getTime(optionParsedArrivalDate) <= getTime(inboundSelection.date);
    })
    return coherentOptions;
}

// --- MASTER FUNCTION ---

async function calculateAvailability(schedule, departureObj, returnObj = null, prevOutput = null) {
    const { origin, destination, date } = departureObj;
    const compactDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    const originRoutes = schedule.find(el => el.port === origin);
    const routeInfo = originRoutes.flight_schedule.find(el => el.destination_port === destination);

    let availabilityDetails = [];

    function buildAvailabilityDetails() {
        availabilityDetails = getFlightsPerDate(routeInfo, date);
        if (availabilityDetails) {
            availabilityDetails = addCommonData([...availabilityDetails], origin, destination, date);
            availabilityDetails = calculateFlightDurations([...availabilityDetails], routeInfo.duration, date);
            availabilityDetails = calculateFlightPrices([...availabilityDetails], routeInfo.price);
            availabilityDetails = determineVessels([...availabilityDetails], routeInfo.vessels);
            availabilityDetails = determineOperators([...availabilityDetails], routeInfo.shared_operation);
        }
        if (routeInfo.intermediate_ports) {
            const alternateRoutings = determineAlternateRoutings(routeInfo.intermediate_ports);
            console.log(alternateRoutings);
        }
    }

    if (!routeInfo.direct_flight) {
        return null
    }
    else if (!routeInfo.direct_flight && routeInfo.intermediate_ports) {
        // No direct flight --> Search for indirect routings
        const alternateRoutings = determineAlternateRoutings(routeInfo.intermediate_ports);
        console.log(alternateRoutings);
        // Recursive availability calculation via intermediate ports
    } else {
        buildAvailabilityDetails();
    }

    let output;
    if (prevOutput) {
        const { origin: prevOrigin, destination: prevDestination, departure_date } = prevOutput.departures[0];
        if (readFlightCookies(`${origin}-${destination}-${compactDate}`)) {
            output = { 
                departures: prevOutput.departures, 
                returns: JSON.parse(localStorage.getItem(`${origin}-${destination}-${compactDate}`)) 
            };
        } else if (readFlightCookies(`${prevOrigin}-${prevDestination}-${departure_date.replace(/\//g, "-")}`)) {
            output = { 
                departures: JSON.parse(localStorage.getItem(`${prevOrigin}-${prevDestination}-${departure_date.replace(/\//g, "-")}`)), 
                returns: availabilityDetails 
            };
        } else {
            output = { departures: prevOutput.departures, returns: availabilityDetails };
        }
    } else  {
        output = { departures: availabilityDetails }
    }
    
    if (returnObj) {
        const segmentsCoherence = checkSegmentsCoherence(availabilityDetails, returnObj);
        if (readFlightCookies(`${origin}-${destination}-${compactDate}`)) {
            output = { departures: JSON.parse(localStorage.getItem(`${origin}-${destination}-${compactDate}`)), returns: "pending" };
        } else {
            segmentsCoherence.length === 0
            ? output = { 
                departures: availabilityDetails, 
                returns: { status: "incoherent", reason: "All departure flights arrive later than the selected return date", returnDate: returnObj.date }
            }
            : output = { departures: availabilityDetails, returns: "pending" };
        }
    }

    if (!Cookies.get(`${origin}-${destination}-${compactDate}`)) {
        writeFlightCookies(`${origin}-${destination}-${compactDate}`, JSON.stringify(availabilityDetails));
    }
    return output;
}

export default calculateAvailability;