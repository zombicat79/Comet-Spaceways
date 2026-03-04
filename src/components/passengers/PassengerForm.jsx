import { useContext, useMemo } from "react";
import { FlightSearchContext } from "../../contexts/FlightSearchContext";
import { CartContext } from "../../contexts/CartContext";

import Form from "../forms/Form";

import * as formConfig from './passenger-form-config';

function PassengerForm({ type, occurrence }) {
    const { flightSearchState } = useContext(FlightSearchContext)
    const { cartState, cartDispatcher } = useContext(CartContext);
    const { humanoids, nhes, minors, pets } = flightSearchState.passengers;
    
    const [minorFormFields, minorFormDefaultValues] = useMemo(() => {
        if (minors > 0 && humanoids === 0) {
            const processedMinorFormFields = formConfig.minorFormFields.map((el) => {
                if (el.props.name === "unaccompanied") return { ...el, props: { ...el.props, visible: true }};
                return el;
            })
            const processedMinorFormDefaults = { ...formConfig.minorFormDefaultValues, unaccompanied: true };
            return [processedMinorFormFields, processedMinorFormDefaults]
        }
        return [formConfig.minorFormFields, formConfig.minorFormDefaultValues]
    }, [humanoids, minors])

    const [petFormFields, petFormDefaultValues] = useMemo(() => {
        if (pets > 0 && humanoids === 0 && nhes === 0 && minors === 0) {
            const processedPetFormFields = formConfig.petFormFields.map((el) => {
                if (el.props.name === "unaccompanied") return { ...el, props: { ...el.props, visible: true }};
                if (el.props.name === "conversational") return { ...el, props: { ...el.props, visible: true }};
                return el;
            })
            const processedMPetFormDefaults = { ...formConfig.petFormDefaultValues, unaccompanied: true };
            return [processedPetFormFields, processedMPetFormDefaults]
        }
        return [formConfig.petFormFields, formConfig.petFormDefaultValues]
    }, [humanoids, nhes, minors, pets])
    
    let content;
    switch(type) {
        case "nhe":
            content = <Form id={`${type}-form-${occurrence}`} formFields={formConfig.nheFormFields} defaultValues={formConfig.nheFormDefaultValues} formRules={formConfig.nheFormRules} superform={true} superformHandler={cartDispatcher} superformState={cartState} />
            break;
        case "minor":
            content = <Form id={`${type}-form-${occurrence}`} formFields={minorFormFields} defaultValues={minorFormDefaultValues} formRules={formConfig.minorFormRules} superform={true} superformHandler={cartDispatcher} superformState={cartState} />
            break;
        case "pet":
            content = <Form id={`${type}-form-${occurrence}`} formFields={petFormFields} defaultValues={petFormDefaultValues} formRules={formConfig.petFormRules} superform={true} superformHandler={cartDispatcher} superformState={cartState} />
            break;
        default: // humanoids
            content = <Form id={`${type}-form-${occurrence}`} formFields={formConfig.humanoidFormFields} defaultValues={formConfig.humanoidFormDefaultValues} formRules={formConfig.humanoidFormRules} superform={true} superformHandler={cartDispatcher} superformState={cartState} />
    }

    return content;
}

export default PassengerForm;