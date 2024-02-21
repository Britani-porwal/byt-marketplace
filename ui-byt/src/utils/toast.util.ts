import toast from "react-hot-toast";

export const showSuccess = (message: string) => {
    return toast.success(message);
}

export const showError = (message: string) => {
    return toast.error(message);
}