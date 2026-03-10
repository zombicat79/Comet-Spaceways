export const humanoidFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'name', title: 'First Name'}},
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'surname', title: 'Last Name'}},
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
];
export const humanoidFormDefaultValues = { 
    name: '',
    surname: '',
    nationality: 'N/A',
    build: ''
}
export const humanoidFormRules = [
    { field: 'name', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'surname', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'nationality', rules: [{ name: 'void', value: false}] },
    { field: 'build', rules: [{ name: 'void', value: false}] }
]

export const nheFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'name', title: 'Human Pronounceable Name'}},
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'surname', title: 'Tribe / Cast / Faction Name'}},
    { type: 'selector', props: {labelled: true, name: 'race', title: 'Race', options: [
        'gray / green dwarf',
        'reptilian',
        'insectoid',
        'cephalopodian',
        'polymorphic',
        'amoebian',
        'leonian',
        'aetherian',
        'other'
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
    origin: '',
    race: 'N/A'
}
export const nheFormRules = [
    { field: 'name', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'surname', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'race', rules: [{ name: 'void', value: false}] },
    { field: 'origin', rules: [{ name: 'void', value: false}] }
]

export const minorFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'name', title: 'First Name'}},
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'surname', title: 'Last Name'}},
    { type: 'range', props: {labelled: true, inputType: 'range', name: 'age', title: 'Age', min: '2', max: '17'}},
    { type: 'radio', props: {labelled: true, name: 'build', title: 'Build', options: ['organic', 'cyborg', 'android']}},
    { type: 'checkbox', props: {labelled: true, inputType: 'checkbox', name: 'unaccompanied', title: 'Minor travelling without humanoid adult supervision', visible: false, readOnly: true, marked: true}},
];
export const minorFormDefaultValues = {
    name: '',
    surname: '',
    age: '',
    build: '',
    unaccompanied: false
}
export const minorFormRules = [
    { field: 'name', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'surname', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'age', rules: [{ name: 'minValue', value: 2}, { name: 'maxValue', value: 17 }] },
    { field: 'build', rules: [{ name: 'void', value: true}] },
    { field: 'unaccompanied', rules: [{ name: 'obligation', value: true}] }
]

export const petFormFields = [
    { type: 'input', props: {labelled: true, inputType: 'text', name: 'name', title: 'Nickname'}},
    { type: 'selector', props: {labelled: true, name: 'species', title: "Species", options: [
        'dog',
        'cat',
        'land mammal',
        'water mammal',
        'bird',
        'reptile',
        'fish',
        'insect',
        'other'
    ]}},
    { type: 'radio', props: {labelled: true, name: 'build', title: 'Build', options: ['organic', 'cyborg', 'robotic']}},
    { type: 'checkbox', props: {labelled: true, inputType: 'checkbox', name: 'unaccompanied', title: 'Pet travelling without supervision', visible: false, readOnly: true}},
    { type: 'checkbox', props: {labelled: true, inputType: 'checkbox', name: 'conversational', title: 'Enhanced for verbal communication', visible: false, readOnly: false}},
];
export const petFormDefaultValues = {
    name: '',
    species: '',
    build: '',
    unaccompanied: false,
    conversational: false
}
export const petFormRules = [
    { field: 'name', rules: [{ name: 'minLength', value: 2}, { name: 'maxLength', value: 15 }] },
    { field: 'species', rules: [{ name: 'void', value: true}] },
    { field: 'build', rules: [{ name: 'void', value: true}] },
    { field: 'unaccompanied', rules: [{ name: 'obligation', value: true}] },
    { field: 'conversational', rules: [{ name: 'obligation', value: false}] }
]