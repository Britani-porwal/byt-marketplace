import Image from "next/image"
import { IMAGES } from "./partner-logo.constants"

export default function LogoFooter() {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="relative">
                <p className="text-center text-stone-600 tracking-[0.2em] font-bold mb-12 px-2 text-[14px] leading-[20px]">TRUSTED BY INDUSTRY LEADING COMPANIES</p>
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-4 lg:gap-16 m-auto">
                    {IMAGES.map((item, index) =>
                        <div key={index} className="mx-6">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}