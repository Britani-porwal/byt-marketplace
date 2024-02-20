import Image from "next/image"
import SmoothLink from "../navigation/link"
export default function Main() {
    return (
        <div className="bg-gradient-to-b from-violet-100">
            <div className="flex relative max-w-[1400px] mx-auto p-4 md:p-0">
                <div className="md:p-12 md:w-1/2 w-3/4 lg:pl-32 lg:pt-56 lg:h-[744px]">
                    <div className="lg:h-[368px] lg:w-[655px]">
                        <p className="lg:text-[64px] md:text-[48px] text-[32px] lg:leading-[72px] font-bold">
                            <span className="text-purple">Unleashing </span>
                            The Full Potential of Web 3
                        </p>
                        <div className="mt-8 mb-10 text-sm md:text-lg">
                            <p>We provide blockchain tools and services for both technical and non-technical customers to make it easy for projects to turn Web3 dreams into reality.</p>
                        </div>
                        <button className="bg-purple text-white font-bold px-6 py-4 rounded-[28px] mx-auto"><SmoothLink path={"#products"} label={"EXPLORE OUR PRODUCTS"} /></button>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        className="float-right"
                        src="/hero-image.png"
                        alt="main logo"
                        width={556}
                        height={774} />
                </div>
            </div>
        </div>
    )
}