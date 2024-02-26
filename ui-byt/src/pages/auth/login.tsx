import AuthForm from "@/components/auth-form"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const Login = () => {
    return <div className="bg-[#0e0628] min-h-[100vh]">
        <Navbar enableDarkTheme={true} />
        <AuthForm />
        <PageFooter enableDarkTheme={true} />
    </div>
}

export default Login