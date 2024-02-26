import AboutSection from "@/components/about"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const About = () => {
    return <div className="bg-[#0e0628] min-h-[100vh]">
        <Navbar enableDarkTheme={true} />
        <AboutSection />
        <PageFooter enableDarkTheme={true} />
    </div>
}

export default About