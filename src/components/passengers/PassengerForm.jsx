import Form from "../forms/Form";

function PassengerForm({ type, occurrence }) {
    const humanoidFormFields = [
        { type: 'input', props: {labelled: true, inputType: 'text', name: 'name', title: 'First Name'}},
        { type: 'input', props: {labelled: true, inputType: 'text', name: 'surname', title: 'Last Name'}},
        { type: 'input', props: {labelled: true, inputType: 'text', name: 'email', title: 'Messaging Address'}},
        { type: 'selector', props: {labelled: true, name: 'nationality', title: "Nationality", options: [
            "Selenyte",
            "Earthling",
            "Martian",
            "Venusian",
            "Belter",
            "Saturnian",
            "Other"
        ]}},
        { type: 'radio', props: {labelled: true, name: 'race', title: 'Build', options: [{value: 'organic'}, { value: 'cyborg' }, { value: 'android' }]}},
        { type: 'range', props: {labelled: true, inputType: 'range', name: 'age', title: 'Age', min: '18', max: '150'}},
        { type: 'checkbox', props: {labelled: true, inputType: 'checkbox', name: 'contact', title: 'Contact this passenger', checked: occurrence === 1 ? true : false}},
        { type: 'checkbox', props: {labelled: true, inputType: 'checkbox', name: 'billing', title: 'Bill this passenger', checked: occurrence === 1 ? true : false}},
    ];
    const humanoidFormDefaultValues = { 
        ['name']: '',
        ['surname']: '',
        ['email']: '',
        ['nationality']: 'N/A',
        ['build']: '',
        ['age']: '',
        ['contact']: '',
        ['billing']: '',
    }

    const nheFormFields = [];
    const nheFormDefaultValues = {}

    const minorFormFields = [];
    const minorFormDefaultValues = {}

    const petFormFields = [];
    const petFormDefaultValues = {}
    
    let content;
    switch(type) {
        case "nhe":
            content = <Form id={`${type}-form-${occurrence}`} formFields={nheFormFields} defaultValues={nheFormDefaultValues} />
            break;
        case "minor":
            content = <Form id={`${type}-form-${occurrence}`} formFields={minorFormFields} defaultValues={minorFormDefaultValues} />
            break;
        case "pet":
            content = <Form id={`${type}-form-${occurrence}`} formFields={petFormFields} defaultValues={petFormDefaultValues} />
            break;
        default: // humanoids
            content = <Form id={`${type}-form-${occurrence}`} formFields={humanoidFormFields} defaultValues={humanoidFormDefaultValues} />
    }

    return content;
}

export default PassengerForm;