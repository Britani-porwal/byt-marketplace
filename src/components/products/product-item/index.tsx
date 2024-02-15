import { useState } from "react"
import Image from "next/image";

interface ProductItemProps {
    product: {
        src: string
        title: string
        desc: string
    }
}

const ProductItem = ({ product }: ProductItemProps) => {
    const [show, setShow] = useState(false)

    const handleToggle = () => {
        setShow(!show)
    }

    return <div className={`shadow-custom rounded-[8px] duration-700 transition-[height] ease-in-out ${show ? "h-[180px]" :"h-[112px]" }`}>
        <div className="flex px-[24px] pt-[24px] gap-[12px] items-center ">
            <div>
                <Image
                    src={product.src}
                    alt={product.title}
                    width={64}
                    height={64} />
            </div>
            <div className="relative w-full flex justify-between cursor-pointer" onClick={handleToggle}>
                <span>
                    <p className="inline font-bold">{product.title}</p>
                </span>
                <button className={`relative right-0 ease-in-out duration-700 ${show ? "-rotate-180 " : ""}`}>
                    <Image className="inline self-start"
                        src="/common/caret.png"
                        alt="down-arrow"
                        width={15}
                        height={10} />
                </button>
            </div>
        </div>
        <div className={"pl-[90px] pr-[34px] pb-[28px] rounded-[8px] text-[14px] leading-[24px]"}>
            <p className={`overflow-hidden duration-700 transition-[height] ease-in-out ${show ? "h-[120px]" : "h-0"}`}>{product.desc}</p>
        </div>
    </div>
}

export default ProductItem