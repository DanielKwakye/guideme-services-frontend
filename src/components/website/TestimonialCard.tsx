import DummyProfilePhoto from "@/assets/images/gm-dummy-profile-photo-2.svg";
import { Quote } from 'lucide-react';
// import {Button} from "@/components/ui/button.tsx";

function TestimonialCard() {
    return (
        <>
            <div
                className="min-w-sm max-w-sm rounded-md space-y-8 cursor-pointer group-hover:text-white group-hover:bg-black">

                <Quote/>
                <p><a>Sarah</a> was amazing! I struggled for weeks trying to set up Google and Apple Pay, but in just
                    one session, she guided me through it step-by-step. I’m so excited—it’s finally working perfectly!
                </p>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-clip bg-primary">
                        <img src={DummyProfilePhoto} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-bold"> Enoch Doe </p>
                        <small>Software Developer</small>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TestimonialCard;