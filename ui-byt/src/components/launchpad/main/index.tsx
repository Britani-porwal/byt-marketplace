import CardSlider from "@/components/slider"
import { CONTENT } from "./main.constants"

const LaunchHead = () => {
    return (
        <div className="bg-gradient-to-l from-[rgba(161,137,244,.1)] via-transparent to-[rgba(105,71,226,0)] h-full">
            <div className="flex flex-col max-w-[1400px] mx-[auto] py-[64px] gap-[128px] md:flex-row">
                <div className="flex-col gap-4 w-[40%] pl-32">
                    <div className="tracking-[0.25em] text-[14px] leading-[20px] font-[700] mb-[8px] text-purple uppercase" id="launchpad">{CONTENT.heading}</div>
                    <div className="text-[64px] leading-[72px] font-[800] mb-[36px]">{CONTENT.title}</div>
                    <div className="text-[16px] font-[400] mb-[48px]" dangerouslySetInnerHTML={{ __html: CONTENT.description }} />
                    <button className="uppercase bg-purple text-white font-bold px-6 py-4 rounded-[28px]">Tell us about your project</button>
                </div>
                <div className="w-1/2">
                    <CardSlider />
                </div>
            </div>
        </div>
    )
}

export default LaunchHead