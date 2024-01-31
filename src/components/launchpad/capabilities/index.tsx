import { CARD_CONTENT, CONTENT } from "./capabilities.constants"
const Capabilities = () => {

    return (<div className="max-w-[1440px] mx-auto px-32 text-center mt-[76px]">
        <div className="tracking-[0.25em] text-[14px] leading-[20px] font-[700] mb-[8px] text-purple uppercase">{CONTENT.heading}</div>
        <div className="text-[44px] leading-[56px] font-[800] px-72">{CONTENT.title}</div>
        <div className="text-[16px] font-[400] px-64 my-[32px]" dangerouslySetInnerHTML={{ __html: CONTENT.description }} />
        <div className="flex flex-wrap gap-4">
            {
                CARD_CONTENT.map(({ title, imgUrl }, index) => {
                    let width = 33
                    if (index > 11) width = 25
                    return (
                        <div key={index} className={`p-[48px] rounded-[8px] flex flex-col justify-center items-center shadow-custom gap-6`} style={{width: `calc(${width}% - 16px)`}}>
                            <img src={imgUrl} alt={title} width={84} height={84} />
                            <span className="font-[700] text-[16px] text-[#0e0628] mx-8 w-[120px]">{title}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>)
}

export default Capabilities