import Image from "next/image"
import { SOLUTION_GRID } from "./solution.constants"

export default function Page3() {
    return (
        <div className="bg-gradient-to-r from-dark from-21.49% to-light text-white text-center mb-[120px]">
            <div className="px-[140px] py-[120px] max-w-[1400px] mx-auto">
                <div className="px-[180px] mb-[40px]">
                    <p className="tracking-[0.25em] text-[14px] leading-[20px] font-[700] mb-[8px]" id="solution">THE SOLUTION</p>
                    <p className="text-[44px] leading-[56px] font-[800] mb-[32px]">Web3's First All-In-One Infrastructure Product suite</p>
                    <p>We've taken our extensive collection of advanced and proprietary code and productized it into individual user friendly tools that can all be integrated together or utilized on an a la carte basis.</p>
                </div>
                <div className="flex gap-x-[16px] m-auto w-[1000px] text-black font-extrabold">
                    {SOLUTION_GRID.map((images,index) =>
                        <div key={index} className="w-1/4 h-56 py-[32px] border border-black bg-white rounded-lg">
                            <Image className="inline"
                                src={images.src}
                                alt={images.alt}
                                height={108}
                                width={108} />
                            <p className="px-[60px]">{images.title}</p>
                        </div>
                    )}
                </div>
                <p className="mt-[40px]">Our Tool suite is constantly expanding Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fuga porro consequatur</p>
            </div>
        </div>
    )
}