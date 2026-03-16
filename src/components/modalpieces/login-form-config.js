export const loginFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'username', title: 'Username'}},
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'password', title: 'Password'}},
];
export const loginFormDefaultValues = { 
    username: '',
    password: ''
}
export const loginFormRules = [
    { field: 'username', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'password', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] }
]