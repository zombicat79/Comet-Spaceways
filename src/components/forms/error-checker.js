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

function checkNoVoidValue(actualValue) {
    if (!actualValue || actualValue === '' || actualValue === 'N/A') {
        return { status: 'ko', msg: 'You must select an option' };
    } else {
        return { status: 'ok', msg: '' };
    }
}

function errorChecker(field, actualValue, formRules) {
    const fieldRules = formRules.filter((el) => el.field === field );
    const { rules } = fieldRules[0];
    console.log(rules)

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
            case 'void':
                if (rule.value === false) {
                    checkResult = checkNoVoidValue(actualValue);
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

export default errorChecker;