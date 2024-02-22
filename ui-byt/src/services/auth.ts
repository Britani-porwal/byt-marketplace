import { FormValues } from "@/common/modal/validation";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const register = async (formValues: FormValues) => {
    try {
        const body = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        }

        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if (!response.ok) { throw data }

        return data
    }
    catch (error: any) {
        throw error
    }
}

export const login = async (formValues: FormValues) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
        const data = await response.json();

        if (!response.ok) { throw data }
        
        return data
    }
    catch (error: any) {
        throw error
    }
}