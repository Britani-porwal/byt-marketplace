import Modal from "@/common/modal/modal";
import Image from "next/image"
import { useEffect, useState } from "react";
import { productTeamFormFields } from "./product.constants";

export default function ProductSuite() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [isOpen])

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="mx-[140px]">
                <hr className="my-[120px]" />
                <div className="px-[120px] text-center">
                    <Image className="m-auto mb-[32px]"
                        src="/product-suite.png"
                        alt="Product Suite"
                        width={120}
                        height={120}
                    />
                    <p className="tracking-[0.25em] text-[14px] leading-[20px] font-[700] mb-[8px] text-purple">PRODUCT SUITE</p>
                    <p className="text-[44px] leading-[56px] font-[800]">Byt's tool suite empowers developers to build better experiences quickly and cost-effectively.</p>
                    <p className="mt-[32px] mb-[48px]">Want to get started with one or more of these tools?</p>
                    <button className="bg-purple text-white font-[700] px-6 py-4 rounded-[50px]" onClick={handleOpenModal}>TALK TO OUR PRODUCT TEAM</button>
                </div>
                <hr className="my-[120px]" />
            </div>
            {isOpen && <Modal formFields={productTeamFormFields} setIsOpen={setIsOpen} />}
        </div>)
}