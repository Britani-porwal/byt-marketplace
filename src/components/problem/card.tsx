import Image from "next/image"
import { CARD } from "./card-content.constants"

export default function Card() {
    
    return (
        <div className="flex gap-x-[48px]">
            {CARD.map((item , index) =>
                <div key={index} className="w-1/2 h-90 p-[48px] flex flex-col items-center shadow-custom rounded-[8px]">
                    <div>
                        <Image className="inline"
                            src={item.src}
                            alt={item.alt}
                            height={200}
                            width={200} />
                    </div>
                    <div className="text-center mt-[32px] leading-[32px]">
                        <p className="mb-[24px] font-bold text-[20px]">{item.title}</p>
                        <p className="text-[16px]">{item.desc}</p>
                    </div>
                </div>
            )}
        </div>
    )
}