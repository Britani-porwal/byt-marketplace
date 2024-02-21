import AuthForm from "@/components/auth-form"
import PageFooter from "@/components/footer/page-footer"
import Navbar from "@/components/navigation/navbar"

const Register = () => {
    return<>
    <Navbar enableDarkTheme ={true}/>
    <AuthForm isRegister={true}/>
    <PageFooter enableDarkTheme ={true}/>
    </>
}

export default Register