import AuthForm from "@/components/auth-form"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const Register = () => {
    return <div className="bg-[#0e0628] min-h-[100vh]">
        <Navbar enableDarkTheme={true} />
        <AuthForm isRegister={true} />
        <PageFooter enableDarkTheme={true} />
    </div>
}

export default Register