import { formatTimeUnits, getTimeSummaryFromSeconds, pickFromNumberRange, pickRandomFromArray, pickUniquesFromArray } from "./utils";

// --- AUXILIARY FUNCTIONS ---

function getFlightsPerDate(routeInfo, date) {
    const { daily, weekly, monthly } = routeInfo.frequency;

    // Determine if there is flight availability for the selected departure month
    const targetedFlightMonth = new Date(date).getMonth() + 1;
    if (!(monthly.includes(targetedFlightMonth))) {
        return null;
    }

    // Determine if there is flight availability for the selected departure day of the week
    const targetedFlightDay = new Date(date).getDay();
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
    const departureDay = new Date(departureDate).getDate();
    const departureMonth = new Date(departureDate).getMonth() + 1;
    const departureYear = new Date(departureDate).getFullYear();
    
    return allFlights.map((el) => {
        return { ...el, origin, destination, mode: 'direct', departure_date: `${departureDay}/${departureMonth}/${departureYear}` };
    })
}

function calculateFlightDurations(allFlights, durationInfo, departureDate) {
    return allFlights.map((el) => {
        const durationInSeconds = pickFromNumberRange(durationInfo.min.overall_seconds, durationInfo.max.overall_seconds);
        departureDate.setHours(el.departure_time.match(/\d+(?=:)/)[0]);
        departureDate.setMinutes(el.departure_time.match(/(?<=:)\d+/)[0]);
        const arrivalDate = new Date(departureDate.getTime() + durationInSeconds * 1000);

        const arrivalDay = new Date(arrivalDate).getDate();
        const arrivalMonth = new Date(arrivalDate).getMonth() + 1;
        const arrivalYear = new Date(arrivalDate).getFullYear();
        const arrivalHour = new Date(arrivalDate).getHours();
        const arrivalMinute = new Date(arrivalDate).getMinutes();

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

// --- MASTER FUNCTION ---

async function calculateAvailability(schedule, departureObj, returnObj = null, prevOutput = null) {
    const { origin, destination, date } = departureObj;
    const originRoutes = schedule.find(el => el.port === origin);
    const routeInfo = originRoutes.flight_schedule.find(el => el.destination_port === destination);

    let availabilityDetails = [];

    if (!routeInfo.direct_flight && routeInfo.intermediate_ports) {
        // No direct flight --> Search for indirect routings
        const alternateRoutings = determineAlternateRoutings(routeInfo.intermediate_ports);
        console.log(alternateRoutings);
        // Recursive availability calculation via intermediate ports
    } else {
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

    let output;
    if (prevOutput) {
        output = { departures: prevOutput, returns: availabilityDetails }
    } else  {
        output = { departures: availabilityDetails }
    }
    
    if (returnObj) {
        output = { departures: availabilityDetails, returns: "pending" }
    }

    return output;
}

export default calculateAvailability;