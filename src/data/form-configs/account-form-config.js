// USERNAME EDIT
export const usernameFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'raw', name: 'username', title: 'Username'}},
];
export const usernameFormDefaultValues = { 
    username: '',
    password: ''
}
export const usernameFormRules = [
    { field: 'username', rules: [
            { name: 'minLength', value: 6 }, 
            { name: 'maxLength', value: 12 }, 
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ] 
    },
    { field: 'password', rules: [
            { name: 'patternConform-pwd', value: /[0-9]+/ },
            { name: 'patternConform-pwd', value: /[a-z]+/ },
            { name: 'patternConform-pwd', value: /[A-Z]+/ },
            { name: 'patternConform-pwd', value: /[ªº\\!|@#$%&/()=?¿¡{}\-.;:*+[\]^"]+/ },
            { name: 'minLength', value: 8 }, 
            { name: 'maxLength', value: 15 },
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ]
    }
]

// PASSWORD EDIT
export const passwordFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'raw', name: 'username', title: 'Username'}},
    { type: 'input', props: {labelled: true, inputType: 'password', valueOutput: 'raw', name: 'password', title: 'Password'}},
];
export const passwordFormDefaultValues = { 
    username: '',
    password: ''
}
export const passwordFormRules = [
    { field: 'username', rules: [
            { name: 'minLength', value: 6 }, 
            { name: 'maxLength', value: 12 }, 
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ] 
    },
    { field: 'password', rules: [
            { name: 'patternConform-pwd', value: /[0-9]+/ },
            { name: 'patternConform-pwd', value: /[a-z]+/ },
            { name: 'patternConform-pwd', value: /[A-Z]+/ },
            { name: 'patternConform-pwd', value: /[ªº\\!|@#$%&/()=?¿¡{}\-.;:*+[\]^"]+/ },
            { name: 'minLength', value: 8 }, 
            { name: 'maxLength', value: 15 },
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ]
    }
]

// EMAIL EDIT
export const emailFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'raw', name: 'username', title: 'Username'}},
    { type: 'input', props: {labelled: true, inputType: 'password', valueOutput: 'raw', name: 'password', title: 'Password'}},
];
export const emailFormDefaultValues = { 
    username: '',
    password: ''
}
export const emailFormRules = [
    { field: 'username', rules: [
            { name: 'minLength', value: 6 }, 
            { name: 'maxLength', value: 12 }, 
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ] 
    },
    { field: 'password', rules: [
            { name: 'patternConform-pwd', value: /[0-9]+/ },
            { name: 'patternConform-pwd', value: /[a-z]+/ },
            { name: 'patternConform-pwd', value: /[A-Z]+/ },
            { name: 'patternConform-pwd', value: /[ªº\\!|@#$%&/()=?¿¡{}\-.;:*+[\]^"]+/ },
            { name: 'minLength', value: 8 }, 
            { name: 'maxLength', value: 15 },
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ]
    }
]