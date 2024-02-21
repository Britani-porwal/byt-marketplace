import AboutSection from "@/components/about"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const About = () => {
    return <>
        <Navbar enableDarkTheme={true}/>
        <AboutSection />
        <PageFooter  enableDarkTheme={true}/>
    </>
}

export default About