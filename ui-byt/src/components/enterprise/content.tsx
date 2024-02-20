import Image from "next/image"
import { useEffect, useState } from "react";
import { productTeamFormFields } from "../product-suite/product.constants";
import Modal from "@/common/modal/modal";
import { ENTERPRISE_CONTENT } from "./enterprise.constants";

export default function Enterprise() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }, [isOpen])

    const handleOpenModal= () => {
        setIsOpen(true)
    }

    return (
        <div className="bg-gradient-to-t from-violet-100 h-[700px]">
            <div className="max-w-[1400px] relative mx-auto flex">
                <div className="pl-[140px]">
                    <div className="w-[550px]">
                        <p className="tracking-[0.2em] font-bold text-purple mb-[8px]">{ENTERPRISE_CONTENT.title}</p>
                        <p className="text-5xl font-bold">{ENTERPRISE_CONTENT.heading}</p>
                        <div>
                            {ENTERPRISE_CONTENT.description.map((content, index) => (
                                <p key={index} className={`my-[32px] ${index===0 && "font-bold"} leading-[28px]`}>{content}</p>
                            ))}
                        </div>
                        <button className="bg-purple text-white font-bold px-[36px] py-[20px] rounded-[50px]" onClick={handleOpenModal}>{ENTERPRISE_CONTENT.buttonLable}</button>
                    </div>
                </div>
                <div className="w-[700px] overflow-hidden">
                    <Image
                        className="w-[900px] max-w-[1400px] ml-[48px]"
                        src="/alien-computer.png"
                        alt="launchpad image with computer"
                        width={900}
                        height={700} />
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} formFields={productTeamFormFields}/>}
        </div>)
}
