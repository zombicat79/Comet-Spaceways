import { capitalize } from "lodash";

function checkMinLength(expectedValue, actualValue) {
    if (actualValue.length === 0) {
        return { status: 'ko', msg: 'Field cannot be empty' };
    } else if (actualValue.length < expectedValue) {
        return { status: 'ko', msg: `Field must contain at least ${expectedValue} characters` };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkMaxLength(expectedValue, actualValue) {
    if (actualValue.length === 0) {
        return { status: 'ko', msg: 'Field cannot be empty' };
    } else if (actualValue.length > expectedValue) {
        return { status: 'ko', msg: `Field must contain ${expectedValue} characters maximum` };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkMinValue(expectedValue, actualValue) {
    if (!actualValue) {
        return { status: 'ko', msg: 'You must provide a value' };
    } else if (actualValue < expectedValue) {
        return { status: 'ko', msg: `Minimum value must be ${expectedValue}` };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkMaxValue(expectedValue, actualValue) {
    if (!actualValue) {
        return { status: 'ko', msg: 'You must provide a value' };
    } else if (actualValue > expectedValue) {
        return { status: 'ko', msg: `Maximum accepted value is ${expectedValue}` };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkNoVoidValue(actualValue) {
    if (!actualValue || actualValue === '' || actualValue === 'n/a') {
        return { status: 'ko', msg: 'You must select an option' };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkRequirement(actualValue) {
    if (!actualValue || actualValue === 'false') {
        return { status: 'ko', msg: 'Field must be marked as confirmed' };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkPattern(rule, pattern, actualValue) {
    if (!pattern.test(actualValue)) {
        switch(rule) {
            case 'patternConform-pwd':
                return { status: 'ko', msg: 'Password must contain at least 1 digit, 1 uppercase character, 1 lowercase character and 1 special symbol' };
            default: // patternConform-no-space
                return { status: 'ko', msg: 'Field cannot contain spaces' };
        }
    } else {
        return { status: 'ok', msg: '' };
    }
}

function checkEquivalence(targetField, actualValue) {
    const mirrorField = Array.from(document.getElementsByName(targetField))[0];
    if (actualValue !== mirrorField.value) {
        return { status: 'ko', msg: `Value must be equal to what you typed in '${capitalize(targetField)}' field` };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function errorChecker(field, actualValue, formRules) {
    const fieldRules = formRules.filter((el) => el.field === field );
    const { rules } = fieldRules[0];

    let status = 'ok';
    let message = '';
    rules.forEach((rule) => {
        let checkResult;
        switch(rule.name) {
            case 'minLength':
                checkResult = checkMinLength(rule.value, actualValue);
                if (checkResult.status === 'ko') {
                    status = checkResult.status;
                    message = checkResult.msg;
                }
                break;
            case 'maxLength':
                checkResult = checkMaxLength(rule.value, actualValue);
                if (checkResult.status === 'ko') {
                    status = checkResult.status;
                    message = checkResult.msg;
                }
                break;
            case 'minValue':
                checkResult = checkMinValue(rule.value, actualValue);
                if (checkResult.status === 'ko') {
                    status = checkResult.status;
                    message = checkResult.msg;
                }
                break;
            case 'maxValue':
                checkResult = checkMaxValue(rule.value, actualValue);
                if (checkResult.status === 'ko') {
                    status = checkResult.status;
                    message = checkResult.msg;
                }
                break;
            case 'void':
                if (rule.value === true) {
                    checkResult = checkNoVoidValue(actualValue);
                    if (checkResult.status === 'ko') {
                        status = checkResult.status;
                        message = checkResult.msg;
                    }
                }
                break;
            case 'patternConform-no-space':
            case 'patternConform-pwd':
                checkResult = checkPattern(rule.name, rule.value, actualValue);
                if (checkResult.status === 'ko') {
                    status = checkResult.status;
                    message = checkResult.msg;
                }
                break;
            case 'equivalence':
                checkResult = checkEquivalence(rule.value, actualValue);
                if (checkResult.status === 'ko') {
                    status = checkResult.status;
                    message = checkResult.msg;
                }
                break;
            case 'obligation':
                if (rule.value === true) {
                    checkResult = checkRequirement(actualValue);
                    if (checkResult.status === 'ko') {
                        status = checkResult.status;
                        message = checkResult.msg;
                    }
                }
                break;
            default:
                status = 'ok';
                message = '';
        }
    })

    return { status, message };
}

function completionChecker(form, formRules) {
    const formObj = new FormData(form);
    let status = 'ok';
    
    for (const [key, value] of formObj) {
        if (errorChecker(key, value, formRules).status === 'ko') {
            status = 'ko';
            break;
        }
    }
    
    return status;
}

export { errorChecker, completionChecker };