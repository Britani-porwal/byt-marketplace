import { Dispatch, useState } from "react";
import { FormValues, validateFields } from "./validation";
import { contactSupport } from "@/services/product";

interface ModalProps {
    formFields: {
        title: string;
        fields: {
            label: string;
            placeholder: string;
            type: string;
        }[];
    },
    setIsOpen: Dispatch<boolean>
}

export default function Modal({ formFields, setIsOpen }: ModalProps) {
    const [formValues, setFormValues] = useState<FormValues>()
    const [error, setError] = useState<FormValues>()

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleFormInput = (value: string, label: string) => {
        setFormValues({
            ...formValues,
            [label]: value
        })
    }

    const handleFormSubmit = () => {
        const errorValues = validateFields(formValues)
        if (errorValues) {
            setError(errorValues)
            return
        }
        else{
           formValues && contactSupport(formValues)
            handleCloseModal()
        }
    }

    return <div className="modalOverlay">
        <div className="modalContainer">
            <span className="modalTitle">{formFields.title}</span>
            <div className="fieldsContainer">
                {
                    formFields.fields.map(({ label, placeholder, type }, index) => {
                        return <div key={index} className="lableContainer">
                            <label className="lableText">{label}</label>
                            <input type={type} placeholder={placeholder} className="inputField" value={formValues?.[label]} onChange={(e) => handleFormInput(e.target.value, label)} />
                            {error?.[label] ? <span className="error">{error[label]}</span>: <></>}
                        </div>
                    })
                }
            </div>
            <div className="buttonContainer">
                <button className="cancelButton" onClick={handleCloseModal}>Cancel</button>
                <button className="submitButton" onClick={handleFormSubmit}>Submit</button>
            </div>
        </div>
    </div>
}