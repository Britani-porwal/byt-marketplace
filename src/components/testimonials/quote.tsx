import Image from "next/image"

export default function FooterQuote() {
    return (
        <footer className="bg-gradient-to-r from-dark from-21.49% to-light text-white">
            <div className="mx-auto max-w-[1400px]">
                <div className="flex flex-row items-center px-[140px] py-6 mt-12">
                    <div className="mr-6">
                        <Image
                            src="/ceo.png"
                            alt="AJ Vaynerchuk"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-col p-5">
                        <div>
                            <p className="italic text-[18px] leading-[28px] font-[400]">“Fellas, just wanted to say thank you. The first auction was a big success... I felt like we were taken care of and supported. Thank you again 🤝”</p>
                        </div>
                        <div className="pt-3">
                            <Image
                                className="inline"
                                src="/vsp-logo.png"
                                alt="VSP Logo"
                                width={30}
                                height={50} />
                            <p className="inline pl-5 font-bold">- AJ VAYNERCHUK (CEO, VAYNER SPORTS PASS) </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}