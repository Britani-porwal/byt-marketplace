import PageFooter from "@/components/footer/page-footer"
import LaunchpadHome from "@/components/launchpad"
import Navbar from "@/components/navigation/navbar"
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'], variable: '--font-poppins' })

const Launchpad = () => {
    return <div className={`${poppins.variable} font-sans`}>
        <Navbar />
        <LaunchpadHome />
        <PageFooter />
    </div>
}

export default Launchpad