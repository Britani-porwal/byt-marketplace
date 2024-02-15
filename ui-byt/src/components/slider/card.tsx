interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    logoUrl: string;
}

const Card = ({ imageUrl, title, description, logoUrl }: CardProps) => {
    return <div className="py-[24px] px-[48px] bg-white rounded-[16px] flex flex-col items-center justify-between w-[490px] gap-[16px] h-[600px] shadow-xl">
        <img src={imageUrl} alt="sample alt" width="100%" height={220} />
        <div>
            <div className="font-[600] text-[24px] mb-[16px]">{title}</div>
            <div className="text-center font-[400] text-[18px] text-[#544e6b]">{description}</div>
        </div>
        <img src={logoUrl} alt="sample alt text" width={52} height={52} />
    </div>
}

export default Card