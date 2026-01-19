const orbitCatalog = [
    {
        distance: "30ua",
        outermost: true,
        type: "planet",
        orbitalObject: {
            name: "Neptune",
            size: "big",
            ringed: false,
            color: "#4B70DD",
            clickable: false
        }
    },
    {
        distance: "20ua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Uranus",
            size: "big",
            ringed: false,
            color: "#308EAA",
            clickable: false
        }
    },
    {
        distance: "10ua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Saturn",
            size: "gigantic",
            ringed: true,
            color: "#CEB175",
            clickable: true
        }
    },
    {
        distance: "5ua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Jupiter",
            size: "gigantic",
            ringed: true,
            color: "#E3AD71",
            clickable: false
        }
    },
    {
        distance: "3ua",
        outermost: false,
        type: "asteroid",
        orbitalObject: {
            name: "Ceres",
            size: "small",
            ringed: false,
            color: "#666666",
            clickable: true
        }
    },
    {
        distance: "1halfua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Mars",
            size: "regular",
            ringed: false,
            color: "#A12312",
            clickable: true
        }
    },
    {
        distance: "1ua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Earth",
            size: "regular",
            ringed: false,
            color: "#2E3A92",
            clickable: true
        }
    },
    {
        distance: "3quarterua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Venus",
            size: "regular",
            ringed: false,
            color: "#E3BB76",
            clickable: true
        }
    },
    {
        distance: "halfua",
        outermost: false,
        type: "planet",
        orbitalObject: {
            name: "Mercury",
            size: "small",
            ringed: false,
            color: "#695D4A",
            clickable: false
        }
    }
]

export default orbitCatalog;