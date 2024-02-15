export interface FormValues {
    [key: string]: string;
}

const isFieldEmpty = (value: string): boolean => {
    return !value || value.trim().length === 0;
}

const validateEmail = (value: string): boolean => {
    return (value.includes('@') && value.includes("."))
}

const EMPTY_FIELD_ERR = "This Field is manadatory"
const INVALID_EMAIL = "Please enter a valid email"

export const validateFields = (values: FormValues | undefined) => {
    const error: FormValues = {};

    if (!values) {
        error.Project = error.Email = error.Subject = EMPTY_FIELD_ERR
    }
    else {
        const projectError = isFieldEmpty(values.Project)
        if (projectError) error.Project = EMPTY_FIELD_ERR

        const emailError = isFieldEmpty(values.Email)
        if (emailError) error.Email = EMPTY_FIELD_ERR
        else if (validateEmail(values.Email)) error.Email = INVALID_EMAIL

        const subjectError = isFieldEmpty(values.Subject)
        if (subjectError) error.Subject = EMPTY_FIELD_ERR
    }

    
    return Object.keys(error).length ? error : undefined;
}