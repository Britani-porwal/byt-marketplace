import Image from "next/image"
import { FOOTER_DETAILS } from "./footer.constants"

export default function PageFooter() {
    return (
        <div className="mx-[128px] mt-[70px]">
            <div className="flex gap-6">
                <Image
                    src="/common/byt-logo.png"
                    alt="logo"
                    width={77}
                    height={36} 
                    className="w-[77px] h-[36px]"/>
                {FOOTER_DETAILS.map((element) => (
                    <>
                        {element.subTitles ?
                            <div className="flex flex-col">
                                <div className="text-[16px] text-black font-[500] mb-[16px]">{element.title}</div>
                                {element.subTitles.map(({ label, path }, index) => (
                                    <a key={index} className="text-[14px] text-[#777e90] mb-[16px] font-[700] hover:text-blue-600" href={path}>{label}</a>
                                ))}
                            </div>
                            : <a className="text-[16px] text-black font-[500]" href={element.link}>{element.title}</a>}
                    </>
                ))}
            </div>
        </div>
    )
}