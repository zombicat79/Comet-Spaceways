export const raceFields = [
    { type: 'selector', props: {labelled: true, name: 'race', title: 'Race', options: [
        'humanoid', 
        'green little man',
        'reptilian',
        'insectoid',
        'cephalopodian',
        'polymorphic',
        'big-headed gray',
        'amoebian',
        'leonian',
        'aetherian',
        'other'
    ]}},
];
export const raceDefaultValues = { 
    race: 'N/A'
}
export const raceRules = [
    { field: 'race', rules: [{ name: 'void', value: true}] },
]

export const humanoidFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'upper', name: 'name', title: 'First Name'}},
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'upper', name: 'surname', title: 'Last Name'}},
    { type: 'selector', props: {labelled: true, name: 'nationality', title: "Nationality", options: [
        'selenyte',
        'earthling',
        'martian',
        'venusian',
        'belter',
        'jovian',
        'saturnian',
        'other'
    ]}},
    { type: 'radio', props: {labelled: true, name: 'build', title: 'Build', options: ['organic', 'cyborg', 'android']}},
    { type: 'radio', props: {labelled: true, name: 'gender', title: 'Gender', options: ['male', 'female', 'other']}},
    { type: 'selector', props: {labelled: true, name: 'job', title: "Job", options: [
        'astrophysicist',
        'AI psychologist',
        'pirate',
        'colonist',
        'habitat builder',
        'cybersurgeon',
        'VR soldier',
        'asteroid miner'
    ]}}
];
export const humanoidFormDefaultValues = { 
    name: '',
    surname: '',
    nationality: 'N/A',
    build: '',
    gender: '',
    job: 'N/A'
}
export const humanoidFormRules = [
    { field: 'name', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'surname', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'nationality', rules: [{ name: 'void', value: true}] },
    { field: 'build', rules: [{ name: 'void', value: true}] },
    { field: 'gender', rules: [{ name: 'void', value: true}] },
    { field: 'job', rules: [{ name: 'void', value: true}] }
]

export const nheFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'upper', name: 'name', title: 'Human Pronounceable Name'}},
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'upper', name: 'surname', title: 'Tribe / Cast / Faction Name'}},
    { type: 'selector', props: {labelled: true, name: 'job', title: "Area of Expertise", options: [
        'invasion',
        'colonization',
        'exploration',
        'invention',
        'scientific research',
        'philosophy',
        'religion',
        'language interpretation'
    ]}},
    { type: 'radio', props: {labelled: true, name: 'origin', title: 'Origin', options: [
        'milky way',
        'other galaxies',
        'other dimensions'
    ]}},
];
export const nheFormDefaultValues = {
    name: '',
    surname: '',
    job: 'N/A',
    origin: ''
}
export const nheFormRules = [
    { field: 'name', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'surname', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'job', rules: [{ name: 'void', value: true}] },
    { field: 'origin', rules: [{ name: 'void', value: true}] }
]

export const credentialsFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', valueOutput: 'raw', name: 'username', title: 'Username'}},
    { type: 'input', props: {labelled: true, inputType: 'password', valueOutput: 'raw', name: 'password', title: 'Password'}},
    { type: 'input', props: {labelled: true, inputType: 'password', valueOutput: 'raw', name: 'repassword', title: 'Confirm Password'}},
];
export const credentialsFormDefaultValues = { 
    username: '',
    password: '',
    password: ''
}
export const credentialsFormRules = [
    { field: 'username', rules: [
        { name: 'minLength', value: 6 }, 
        { name: 'maxLength', value: 12 }, 
        { name: 'patternConform-no-space', value: /^\S*$/ }
    ]},
    { field: 'password', rules: [
        { name: 'patternConform-pwd', value: /[0-9]+/ },
        { name: 'patternConform-pwd', value: /[a-z]+/ },
        { name: 'patternConform-pwd', value: /[A-Z]+/ },
        { name: 'patternConform-pwd', value: /[ªº\\!|@#$%&/()=?¿¡{}\-.;:*+\[\]\^"]+/ },
        { name: 'minLength', value: 8 }, 
        { name: 'maxLength', value: 15 },
        { name: 'patternConform-no-space', value: /^\S*$/ }
    ]},
    { field: 'repassword', rules: [
        { name: 'equivalence', value: 'password' }
    ]}
]