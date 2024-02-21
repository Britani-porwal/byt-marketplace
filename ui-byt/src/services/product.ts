import { FormValues } from "@/common/modal/validation";

export async function contactSupport(formValues: FormValues) {
    const response = await fetch("http://localhost:5000/create",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    });
    const userId = await response.json();
  }