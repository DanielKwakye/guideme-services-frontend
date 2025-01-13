import {Button} from "@/components/ui/button.tsx";
import LinkedInLogo from "@/assets/images/linkedin-logo.svg";
import GoogleLogo from "@/assets/images/google-logo.svg";
import {useNavigate} from "react-router";
import {FormEvent} from "react";


function AuthForm() {

    const navigate = useNavigate();

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        navigate("/tasks");
    }

    return (
        <>
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
        </>
    )
}

export default AuthForm;