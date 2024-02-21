import AuthForm from "@/components/auth-form"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const Login = () => {
    return <>
    <Navbar enableDarkTheme ={true}/>
    <AuthForm />
    <PageFooter enableDarkTheme ={true}/>
    </>
}

export default Login