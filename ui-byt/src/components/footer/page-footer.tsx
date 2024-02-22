import Image from "next/image"
import { FOOTER_DETAILS } from "./footer.constants"
import Link from "next/link"
import { Fragment } from "react"

interface FooterProps {
    enableDarkTheme?: boolean
}

export default function PageFooter({ enableDarkTheme }: FooterProps) {
    return (
        <div className={`pl-[128px] pt-[70px] ${enableDarkTheme && 'bg-[#0e0628]'}`}>
            <div className="flex gap-6 max-w-[1440px] mx-[auto]">
                <Link href={"/"}>
                    <Image
                        src={`${enableDarkTheme ? '/common/byt-light.svg' : '/common/byt-logo.png'}`}
                        alt="logo"
                        width={77}
                        height={36}
                        className="w-[77px] h-[36px]" /></Link>
                {FOOTER_DETAILS.map((element, index) => (
                    <Fragment key={index}>
                        {element.subTitles ?
                            <div className="flex flex-col">
                                <div className={`text-[16px] ${enableDarkTheme ? 'text-[#fcfcfd]' : 'text-black'} font-[500] mb-[16px]`}>{element.title}</div>
                                {element.subTitles.map(({ label, path }, index) => (
                                    <a key={index} className="text-[14px] text-[#777e90] mb-[16px] font-[500] hover:text-blue-600" href={path}>{label}</a>
                                ))}
                            </div>
                            : <a className="text-[16px] text-black font-[500]" href={element.link}>{element.title}</a>}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}