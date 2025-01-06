// import GMOverwhelmedImage from '../../assets/images/gm-overwhelmed.svg'
import GMUpsetYoungman from '../../assets/images/frustrated-man.svg'
import {Button} from "@/components/ui/button.tsx";


function Header() {
    return (
        <>
            <div className="relative border h-[32rem] rounded-2xl bg-no-repeat bg-primary ">

                <div className="absolute flex">
                    <div className="p-12 flex-1 space-y-8 text-white ">

                        <h1 className="text-6xl font-bold">
                            Don't let the task frustrate you.
                        </h1>
                        <p> Connect with experienced people to guide you through the process and get it done </p>
                        <div className="flex gap-4">
                            <Button className="bg-white text-black hover:bg-black hover:text-white"> Request
                                Guidance </Button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={GMUpsetYoungman} alt=""
                             className="h-full scale-125 z-10 brightness-50 -mb-[38px]"/>
                    </div>

                </div>

            </div>

            {/* style={ {'backgroundImage': `url(${GMOverwhelmedImage})` } }*/}


        </>
    )
}

export default Header