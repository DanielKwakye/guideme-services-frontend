import NavBar from "@/components/website/NavBar.tsx";
import Footer from "@/components/website/Footer.tsx";
import GuideMeLogoBlack from "@/assets/images/guide-me-logo-black.svg";
import AuthForm from "@/auth/AuthForm.tsx";


function LoginPage() {

    return (
        <div>
            {/* Menu items */}
            <NavBar/>

            <div className="mx-auto h-screen flex flex-col justify-center items-center gap-4">

                <img src={GuideMeLogoBlack} alt="" className=''/>

                <div className="max-w-md mx-auto space-y-4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Welcome Back</h1>
                    {/*<p>Sign up to learn, share your expertise, and connect with others on their journey.!</p>*/}
                    <p className="text-center">Log in to seek guidance or share your expertise with the community.</p>
                </div>

                <div className="h-4"></div>

                <AuthForm />


            </div>

            {/*  Footer   */}
            <Footer/>
        </div>
    )
}

export default LoginPage;