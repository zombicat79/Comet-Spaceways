const errors = {
    flightData: {
        title: "Data Unavailable",
        paragraph1: "Apologies, we weren't able to retrieve our interplanetary flight schedule.",
        paragraph2: "You'll be now redirected so you can try a new search 🙏🏼",
        action: {
            type: "redirection",
            destinationUrl: "/"
        }
    }
}

export default errors;