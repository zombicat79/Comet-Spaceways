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
    signupError: {
        title: "Service Unavailable",
        paragraph1: "We encountered a problem while creating your account.",
        paragraph2: "You'll be now redirected so you can keep browsing our site. Please try again in a few minutes 🙏🏼",
        action: {
            type: "redirection",
            destinationUrl: "/"
        }
    },
    // READAPT PARAGRAPH CONTENT DEPENDING ON SPECIFIC NEEDS OF THE MOMENT (CURRENT: PROFILE PAGE)
    processInterruption: {
        title: null,
        paragraph1: "Your account was successfully created, but profile page is not yet available. It will be real soon! 😎",
        paragraph2: "You'll be now redirected so you can keep browsing other sections of our site",
        action: {
            type: "redirection",
            destinationUrl: "/"
        }
    }
}

export default errors;