import NavBar from "@/components/website/NavBar.tsx";
import Footer from "@/components/website/Footer.tsx";
import GuideMeLogoBlack from "@/assets/images/guide-me-logo-black.svg";
import {Button} from "@/components/ui/button.tsx";
import GoogleLogo from "@/assets/images/google-logo.svg";
import LinkedInLogo from "@/assets/images/linkedin-logo.svg";
import {useNavigate} from "react-router";


function LoginPage() {

    const navigate = useNavigate();

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/tasks");
    }

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

                <form className="flex flex-col gap-4 w-full max-w-md">


                    <Button variant="secondary" className="w-full" onClick={onSubmitHandler}>
                        <img src={LinkedInLogo} alt="" className="h-4 w-4"/>
                        Continue with LinkedIn</Button>

                    <div className="flex flex-row items-center py-1">
                        <div className="flex-1 h-[1px] bg-slate-300"></div>
                        <span className="px-1 text-slate-600 text-sm tracking-tight"> OR </span>
                        <div className="flex-1 h-[1px] bg-slate-300"></div>
                    </div>

                    <Button variant={"outline"} className="space-x-4" onClick={onSubmitHandler}>
                        <img src={GoogleLogo} alt="" className="h-4 w-4"/>
                        Continue with Google
                    </Button>


                </form>


            </div>

            {/*  Footer   */}
            <Footer/>
        </div>
    )
}

export default LoginPage;