// import GMOverwhelmedImage from '../../assets/images/gm-overwhelmed.svg'
import GMUpsetYoungman from '../../assets/images/frustrated-man.svg'
import {Button} from "@/components/ui/button.tsx";
import { CircleArrowRight } from 'lucide-react';


function Header() {
    return (
        <div>
            <div className="relative border h-[24rem] rounded-2xl bg-no-repeat bg-primary transition duration-1000 hover:bg-black cursor-pointer animated flipInX">

                <div className="flex">

                    <div className="p-12 flex-1 space-y-8 text-white ">

                        <h1 className="text-6xl font-bold">
                            Don't let the task frustrate you.
                        </h1>
                        <p> Connect with experienced people to guide you through the process and get it done </p>
                        <div className="flex gap-4">
                            <Button className="bg-white font-bold text-black hover:bg-primary hover:text-white inline-flex gap-4 hover:font-bold hover:scale-110 duration-300 transition">
                                <span>Seek Guidance</span> <CircleArrowRight />
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img src={GMUpsetYoungman} alt=""
                             className="absolute h-full scale-125 brightness-50 bottom-0 left-0 mb-[28px]"/>
                    </div>

                </div>

            </div>

            {/* style={ {'backgroundImage': `url(${GMOverwhelmedImage})` } }*/}


        </div>
    )
}

export default Header