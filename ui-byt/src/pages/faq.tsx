import FAQ from "@/components/faq"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const FAQSection = () => {
    return <div className="bg-[#0e0628] min-h-[100vh]">
        <Navbar enableDarkTheme={true} />
        <FAQ />
        <PageFooter enableDarkTheme={true} />
    </div>
}

export default FAQSection