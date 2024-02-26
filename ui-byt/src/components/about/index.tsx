import Image from "next/image"
import { ABOUT_DETAILS, FIGURES, TEAM } from "./about.constants"

const AboutSection = () => {

    return <div className="max-w-[1440px] mx-auto text-[#fcfcfd] md:px-[164px] px-[56px]">
        <div className="flex items-center justify-center flex-col md:flex-row py-[100px]">
            <Image src="/images/scuttle-rocket.png" alt="scuttle-rocket" width={500} height={500} />
            <div className="min-w-[300px]">
                <p className="text-[24px] font-[700]">{ABOUT_DETAILS.heading}</p>
                {ABOUT_DETAILS.description.map((content) => (
                    <p className="text-[16px] leading-[28px] mt-[20px]">{content}</p>
                ))}
            </div>
        </div>

        <div className="flex flex-wrap justify-center gap-y-[24px]">
            {FIGURES.map(({ title, subTitle }, index) => (
                <div key={index} className="flex flex-col items-center justify-center px-[80px]">
                    <span className="text-[48px] font-[700]">{title}</span>
                    <span className="text-[16px]">{subTitle}</span>
                </div>
            ))}
        </div>

        <div className="text-[24px] text-center mt-[100px] font-[700]">Our Team</div>
        <div className="flex flex-wrap justify-center gap-[56px] py-[50px]">
            {TEAM.map(({ photoUrl, name, designation }, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                    <Image src={photoUrl} alt={name} width={180} height={180} />
                    <span className="text-[16px]">{name}</span>
                    <span className="text-[14px] text-[#8e8e95]">{designation}</span>
                </div>
            ))}
        </div>
    </div>
}

export default AboutSection