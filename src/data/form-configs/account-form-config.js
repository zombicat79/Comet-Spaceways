// USERNAME EDIT
export const usernameFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'raw', name: 'username', title: 'New username'}},
];
export const usernameFormDefaultValues = { 
    username: ''
}
export const usernameFormRules = [
    { field: 'username', rules: [
            { name: 'minLength', value: 6 }, 
            { name: 'maxLength', value: 12 }, 
            { name: 'patternConform-no-space', value: /^\S*$/ }
        ] 
    }
]

// PASSWORD EDIT
export const passwordFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'password', valueOutput: 'raw', name: 'password', title: 'New password'}}
];
export const passwordFormDefaultValues = { 
    password: ''
}
export const passwordFormRules = [
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
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'raw', name: 'email', title: 'New email'}}
];
export const emailFormDefaultValues = { 
    email: ''
}
export const emailFormRules = [
    { field: 'email', rules: [
        { name: 'patternConform-email', value: /^[\w.+%-]+@[\w.-]+\.[a-zA-Z]{2,}$/ },
        { name: 'minLength', value: 1 }
    ]}
]

// DELETE ACCOUNT
export const deleteAccountFormFields = [
    { type: 'input', props: {labelled: false, inputType: 'text', valueOutput: 'raw', name: 'delete-account', title: ''}},
];
export const deleteAccountFormDefaultValues = { 
    username: ''
}
export const deleteAccountFormRules = [
    { field: 'delete-account', rules: [
            { name: 'patternConform-literal', value: /^DELETE$/ }
        ] 
    }
]