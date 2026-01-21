const orbitCatalog = [
    {
        distance: "30ua",
        inclination: "0deg",
        outermost: true,
        type: "planet",
        orbitalObject: {
            name: "neptune",
            size: "big",
            ringed: false,
            background: "gradient",
            color: "blue",
            clickable: false
        }
    },
    {
        distance: "20ua",
        outermost: false,
        inclination: "90deg",
        type: "planet",
        orbitalObject: {
            name: "uranus",
            size: "big",
            ringed: false,
            background: "gradient",
            color: "azure",
            clickable: false
        }
    },
    {
        distance: "10ua",
        outermost: false,
        inclination: "180deg",
        type: "planet",
        orbitalObject: {
            name: "saturn",
            size: "gigantic",
            ringed: true,
            background: "gradient",
            color: "brown",
            clickable: true
        }
    },
    {
        distance: "5ua",
        outermost: false,
        type: "planet",
        inclination: "90deg",
        orbitalObject: {
            name: "jupiter",
            size: "gigantic",
            ringed: false,
            background: "gradient",
            color: "jupiter",
            clickable: false
        }
    },
    {
        distance: "3ua",
        outermost: false,
        inclination: "0deg",
        type: "asteroid",
        orbitalObject: {
            name: "ceres",
            size: "small",
            ringed: false,
            background: "solid",
            color: "grey",
            clickable: true
        }
    },
    {
        distance: "1halfua",
        outermost: false,
        inclination: "180deg",
        type: "planet",
        orbitalObject: {
            name: "mars",
            size: "regular",
            ringed: false,
            background: "solid",
            color: "red",
            clickable: true
        }
    },
    {
        distance: "1ua",
        outermost: false,
        inclination: "270deg",
        type: "planet",
        orbitalObject: {
            name: "earth",
            size: "regular",
            ringed: false,
            background: "gradient",
            color: "earth",
            clickable: true
        }
    },
    {
        distance: "3quarterua",
        outermost: false,
        inclination: "90deg",
        type: "planet",
        orbitalObject: {
            name: "venus",
            size: "regular",
            ringed: false,
            background: "solid",
            color: "yellow",
            clickable: true
        }
    },
    {
        distance: "halfua",
        outermost: false,
        inclination: "90deg",
        type: "planet",
        orbitalObject: {
            name: "mercury",
            size: "small",
            ringed: false,
            background: "solid",
            color: "brown",
            clickable: false
        }
    }
]

export default orbitCatalog;