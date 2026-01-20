const orbitCatalog = [
    {
        distance: "30ua",
        inclination: "0deg",
        outermost: true,
        type: "planet",
        orbitalObject: {
            name: "Neptune",
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
            name: "Uranus",
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
            name: "Saturn",
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
            name: "Jupiter",
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
            name: "Ceres",
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
            name: "Mars",
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
            name: "Earth",
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
            name: "Venus",
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
            name: "Mercury",
            size: "small",
            ringed: false,
            background: "solid",
            color: "brown",
            clickable: false
        }
    }
]

export default orbitCatalog;