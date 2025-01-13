import NavBar from "@/components/website/NavBar.tsx";
import Footer from "@/components/website/Footer.tsx";
// import SignupImage from '../assets/images/remote-meeting-signup.svg'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import GuideMeLogoBlack from "@/assets/images/guide-me-logo-black.svg";
import AuthForm from "@/auth/AuthForm.tsx";


function SignupPage() {

    return (

        <div>
            {/* Menu items */}
            <NavBar/>

            <div className="mx-auto h-screen flex flex-col justify-center items-center gap-4">

                <img src={GuideMeLogoBlack} alt="" className='' />

                <div className="max-w-md mx-auto space-y-4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Welcome to GuideMe</h1>
                    {/*<p>Sign up to learn, share your expertise, and connect with others on their journey.!</p>*/}
                    <p className="text-center">Whether you're here to seek guidance or share your expertise, join our growing community today!</p>
                </div>

                <div className="h-4"></div>

                <AuthForm />


            </div>

            {/*  Footer   */}
            <Footer/>
        </div>

    )
}

export default SignupPage;