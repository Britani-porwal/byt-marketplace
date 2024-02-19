import Image from "next/image"
import { useState } from "react"
import { NAV_LIST } from "./navbar.constants"
import Profile from "../profile"
import SmoothLink from "./link"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

    const handleClick = () => {
        setShowNav(prev => !prev)
    }

    const handleOpenProfile = () => {
        setProfileOpen(true)
    }

    const handleRedirect = (path: any) => {
        if(path.includes("/")) {
            
        }
        const targetElement = document.querySelector(path);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <header className="text-[#7A7492] font-bold  md:text-sm  lg:text-[14px]">
                <ul className="flex justify-end items-center md:gap-5 lg:gap-10 relative mx-2 py-4 w-full lg:h-[72px]">
                    <li className="absolute left-2">
                        <Image
                            src="/common/byt-logo.png"
                            alt="logo"
                            width={60}
                            height={36} />
                    </li>
                    <li className={"visible absolute right-6 md:invisible"}>
                        <button onClick={handleClick}>&#9776;</button>
                    </li>
                    {NAV_LIST.map(({ label, path }, index) => {
                        return (
                            <li key={index} className="invisible md:visible">
                                {/* <button onClick={() => handleRedirect(path)}>{label}</button> */}
                                <SmoothLink to={path} label={label} />
                            </li>
                        )
                    })}
                    <li className="pr-[40px] invisible md:visible" onClick={handleOpenProfile}>
                        <Image
                            src="/common/wallet.png"
                            alt="logo"
                            width={40}
                            height={40} />
                    </li>
                </ul>
                {showNav ?
                    <ul className="h-auto md:h-0 md:collapse text-center flex flex-col gap-y-3">
                        {NAV_LIST.map(({ label, path }, index) => {
                            return (
                                <li key={index} className="invisible md:visible">
                                    {/* <button onClick={() => handleRedirect(path)}>{label}</button> */}
                                    <SmoothLink to={path} label={label} />
                                </li>
                            )
                        })}
                        <li>
                            <Image className="mx-auto"
                                src="/common/wallet.png"
                                alt="logo"
                                width={40}
                                height={40} />
                        </li>
                    </ul> : ""}
            </header>
            {profileOpen && <Profile />}
        </>
    )
}