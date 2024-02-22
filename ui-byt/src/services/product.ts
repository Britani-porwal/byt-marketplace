import { FormValues } from "@/common/modal/validation";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export async function contactSupport(formValues: FormValues) {
    const response = await fetch(`${BASE_URL}/create`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    });
    const userId = await response.json();
  }