import { FormValues } from '@/common/modal/validation';
import { ChangeEvent, useState } from 'react';
import { REGISTER_FIELDS, LOGIN_FIELDS } from './auth-form.constants'
import { login, register } from '@/services/auth';
import { showError, showSuccess } from '@/utils/toast.util';
import Link from 'next/link';
import { ROUTE } from '../../constants/route.constants';

interface AuthProps {
    isRegister?: boolean;
}

const AuthForm = ({ isRegister }: AuthProps) => {
    const [formValues, setFormValues] = useState<FormValues>()

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name.toLowerCase()]: e.target.value
        })
    }

    const handleSubmit = async () => {
        if (formValues) {
            try {
                const data = isRegister ? await register(formValues) : await login(formValues)
                showSuccess(data.message)
            }
            catch (error: any) {
                showError(error.message)
            }
        }
    }

    const FORM_FIELDS = isRegister ? REGISTER_FIELDS : LOGIN_FIELDS
    return <div className="bg-[#0e0628] text-[#fcfcfd]">
        <div className="font-[700] text-[28px] text-center py-[50px]">{isRegister ? 'Register' : 'Login'}</div>
        <div className="md:w-[50%] w-[90%] bg-[#1c1535] rounded-[12px] p-[20px] m-auto flex flex-col items-center gap-[24px]">
            {FORM_FIELDS.map(({ label, placeholder, type }, index) => (
                <div className='w-[250px] text-[14px] flex flex-col gap-[10px] items-center' key={index}>
                    <div className='font-[700] text-[#a49ebc]'>{label}</div>
                    <input className="p-[10px] rounded-[12px] bg-[#0e0628] outline-none text-[12px]"
                        type={type}
                        name={label}
                        placeholder={placeholder}
                        onChange={(e) => handleChangeInput(e)}
                        value={formValues?.[label]} />
                </div>
            ))}
            <button className="bg-[#3772ff] rounded-[20px] text-[14px] px-[16px] py-[8px] font-[700]" onClick={handleSubmit}>{isRegister ? 'Register' : 'Login'}</button>
            <span className='text-[14px]'>{isRegister ? 'Already a member? ' : 'Not a member yet? '}
                <Link href={isRegister ? ROUTE.LOGIN : ROUTE.REGISTER}>
                    {isRegister ? 'Login' : 'Register Now'}
                </Link>
            </span>
        </div>
    </div >
}

export default AuthForm