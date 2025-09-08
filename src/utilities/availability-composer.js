function calculateAvailability(schedule, departureObj, returnObj = null, outputBuild = null) {
    const { origin, destination, date } = departureObj;
    const originRoutes = schedule.find(el => el.port === origin);
    const routeInfo = originRoutes.flight_schedule.find(el => el.destination_port === destination);

    if (!routeInfo.direct_flight) {
        // No direct flight --> Search for indirect routings
        const { intermediate_ports } = routeInfo;
    }

    console.log(routeInfo)

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