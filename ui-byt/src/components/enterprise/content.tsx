import Image from "next/image"
import { useEffect, useState } from "react";
import { productTeamFormFields } from "../product-suite/product.constants";
import Modal from "@/common/modal/modal";

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
                        <p className="tracking-[0.2em] font-bold text-purple mb-[8px]">ENTERPRISE SERVICES</p>
                        <p className="text-5xl font-bold">Full Stack White Glove Development Team</p>
                        <div>
                            <p className="my-[32px] font-bold">Looking for a custom solution or a turn key package? Look no further than our world-class internal development team.</p>
                            <p>Whether it's additional functionality add on to your existing smart contract, a custom chain agnostic marketplace, a full blown decentralized exchange or something even crazier, Byt has the team and the experience to make it happen.</p>
                            <p className="my-[32px]">We offer full service buildout and launchpad services to our enterprise clients. If you can dream it we can build it…and build it fast!</p>
                        </div>
                        <button className="bg-purple text-white font-bold px-[36px] py-[20px] rounded-[50px]" onClick={handleOpenModal}>LEARN ABOUT OUR ENTERPRISE SERVICES</button>
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
