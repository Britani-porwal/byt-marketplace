import { FormValues } from "@/common/modal/validation";
import { showError } from "@/utils/toast.util";

export const register = async (formValues: FormValues) => {
    const body = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password
    }

    const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data
}

export const login = async (formValues: FormValues) => {
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
    });
    const data = await response.json();
    return data
}