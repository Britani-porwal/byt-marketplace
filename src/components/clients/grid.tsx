import { CLIENT_LOGOS, CONTENT } from "./client.constants"

export default function Grid() {
    return (
        <div className="mt-24 bg-purple max-w-[1440px] mx-auto">
            <div className="p-20 flex gap-x-12">
                <div className="w-1/2">
                    <div className="text-white pt-20">
                        <p className="tracking-[0.2em] font-bold">{CONTENT.title}</p>
                        <p className="text-6xl font-[1000] mb-8">{CONTENT.heading}</p>
                        <p>{CONTENT.description}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 w-1/2">
                    {CLIENT_LOGOS.map(({ src, alt }, index) => {
                        let width = 33
                        if (index < 2 || (index > 4 && index < 7)) width = 50
                        return <div key={index} className={`h-[122px] flex justify-center items-center bg-[#0E0628] rounded-[12px]`} style={{ width: `calc(${width}% - 16px)` }}>
                            <img src={src} alt={alt} />
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}