const errors = {
    flightData: {
        title: "Data Unavailable",
        paragraph1: "Apologies, we weren't able to retrieve our interplanetary flight schedule.",
        paragraph2: "You'll be now redirected so you can try a new search 🙏🏼",
        action: {
            type: "redirection",
            destinationUrl: "/"
        }
    },
    destinationData: {
        title: "Data Unavailable",
        paragraph1: "Apologies, we weren't able to retrieve our destination directory.",
        paragraph2: "You'll be now redirected so you can keep browsing our site. Please try again in a few minutes 🙏🏼",
        action: {
            type: "redirection",
            destinationUrl: "/"
        }
    },
    // REMOVE AFTER SIGN UP PROCESS COMPLETION
    signupInterruption: {
        title: "Demo mode",
        paragraph1: "Apologies, account creation is not available yet.",
        paragraph2: "You'll be now redirected so you can keep browsing our site. Please try again in the future 🙏🏼",
        action: {
            type: "redirection",
            destinationUrl: "/"
        }
    }
}

export default errors;