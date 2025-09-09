import { pickRandomFromArray, pickUniquesFromArray } from "./utils";

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

function determineVessels(allFlights, allVessels) {
    return allFlights.map((el) => {
        if (allVessels.length === 1) return { ...el, vessel: allVessels[0] };
        return { ...el, vessel: pickRandomFromArray(allVessels) };
    })
}

function determineOperators(allFlights, allOperators) {
    const csFillArray = new Array(allOperators.length).fill("Comet Spaceways");
    
    return allFlights.map((el) => {
        if (!allOperators) return { ...el, operator: "Comet Spaceways" };
        return { ...el, operator: pickRandomFromArray(csFillArray.concat(allOperators).concat(csFillArray)) };
    })
}

// --- MASTER FUNCTION ---

function calculateAvailability(schedule, departureObj, returnObj = null, outputBuild = null) {
    const { origin, destination, date } = departureObj;
    const originRoutes = schedule.find(el => el.port === origin);
    const routeInfo = originRoutes.flight_schedule.find(el => el.destination_port === destination);

    let availabilityDetails = [];

    if (!routeInfo.direct_flight) {
        // No direct flight --> Search for indirect routings
        const { intermediate_ports } = routeInfo;
        // Recursive availability calculation via intermediate ports
    } else {
        availabilityDetails = getFlightsPerDate(routeInfo, date);
        // calculateFlightDurations()
        // calculateFlightPrices()
        availabilityDetails = determineVessels([...availabilityDetails], routeInfo.vessels);
        availabilityDetails = determineOperators([...availabilityDetails], routeInfo.shared_operation);
        console.log(availabilityDetails)
    }

    /* let output;
    if (outputBuild) {
        output = { depart: { ...outputBuild }, return: {} }
    } else  {
        output = { depart: {} }
    }
    
    if (returnObj) {
        output = calculateAvailability(schedule, returnObj, null, output);
    }

    return output; */
}

export default calculateAvailability;