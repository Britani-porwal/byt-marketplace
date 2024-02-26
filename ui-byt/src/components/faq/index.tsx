import { SetStateAction, useState } from "react"
import { FAQ_HEAD, GENERAL_FAQ, MARKETPLACE_FAQ } from "./faq.contsants"

interface FAQType {
    [key: string]: boolean
}

const FAQ = () => {
    const [open, setOpen] = useState<FAQType>({})
    const [selectedFAQ, setSelectedFAQ] = useState(GENERAL_FAQ)

    const toggleAccordion = (index: string) => {
        setOpen((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const setFAQType = (value: any) => {
        setSelectedFAQ(value)
    }

    return <div className="text-[#fcfcfd] px-[192px] py-[84px]">
        <div className="text-[12px] text-[#777e90] font-[700] uppercase">{FAQ_HEAD.title}</div>
        <div className="text-[48px] font-[500] tracking-[-0.02em]">{FAQ_HEAD.heading}</div>
        <div className="text-[#e6e8ec]" dangerouslySetInnerHTML={{ __html: FAQ_HEAD.subHeading }} />
        <div className="flex justify-between pt-[80px]">
            <div className="text-[14px] font-[500]">
                <div className="flex gap-[8px]">
                    <img src={"/common/faq-general.svg"} alt={"general"} width={16} height={16} />
                    <p className="text-[#777e90] hover:text-[#fcfcfd] active:text-[#fcfcfd] cursor-pointer" onClick={() => setFAQType(GENERAL_FAQ)}>General</p>
                </div>
                <div className="flex gap-[8px]">
                    <img src={"/common/faq-home.svg"} alt={"marketplace"} width={16} height={16} />
                    <p className="text-[#777e90] hover:text-[#fcfcfd] cursor-pointer" onClick={() => setFAQType(MARKETPLACE_FAQ)}>Byt Marketplace</p>
                </div>
            </div>
            <div className="w-[70%]">
                {selectedFAQ.map(({ question, answer }, index) => (
                    <div key={index} className="border-t-[1px] border-[#353945] text-[16px] py-[32px] pr-[40px]">
                        <div className="flex justify-between font-[500] cursor-pointer hover:text-[#3772ff]" onClick={() => toggleAccordion(index.toString())}>
                            {question}
                            <img src={"/common/down-arrow.svg"} alt={"arrow"} width={12} height={12} />
                        </div>
                        {open[index] && <p className="text-[#777e90] pt-[32px]">{answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default FAQ