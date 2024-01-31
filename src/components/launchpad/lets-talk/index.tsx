import Modal from "@/common/modal/modal"
import { CONTENT } from "./talk.constants"
import Image from "next/image"
import { productTeamFormFields } from "@/components/product-suite/product.constants"
import { useEffect, useState } from "react"

const LetsTalk = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    return (<div className="text-center max-w-[1440px] mx-auto px-32 mt-[80px]">
        <Image src="/lets-talk.svg" alt={CONTENT.title} width={108} height={108} className="mx-auto" />
        <div className="tracking-[0.25em] text-[14px] leading-[20px] font-[700] mb-[8px] text-purple uppercase mt-[32px]">{CONTENT.title}</div>
        <div className="text-[44px] leading-[56px] font-[800] px-72 mb-[32px]">{CONTENT.heading}</div>
        <div className="text-[16px] font-[400] px-64">{CONTENT.description}</div>
        <button onClick={handleOpenModal}
            className="bg-purple text-white px-[36px] py-[20px] rounded-[50px] uppercase font-[700] text-[16px] mt-[64px] mb-[100px]">Fill out our questionnaire</button>
        <hr />
        {isOpen && <Modal setIsOpen={setIsOpen} formFields={productTeamFormFields} />}
    </div>)
}

export default LetsTalk