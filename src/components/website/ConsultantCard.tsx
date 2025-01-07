import DummyProfilePhoto from '../../assets/images/gm-dummy-profile-photo.svg'
import Rating from "@/components/website/Rating.tsx";
import {Button} from "@/components/ui/button.tsx";

function ConsultantCard({ name = "Domnic Asiedu", title = "Software Engineer" } : { name?: string, title?: string } ) {
    return (
        <>
            <div className="border p-4 min-w-sm max-w-sm rounded-md space-y-8 cursor-pointer group-hover:text-white group-hover:bg-black">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-clip bg-primary">
                            <img src={DummyProfilePhoto} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold"> {name} </p>
                            <small>{title}</small>
                        </div>
                    </div>
                    <div className="">
                        <span className="font-bold">CAD $8/hr</span>
                    </div>
                </div>
                <p className="line-clamp-3 overflow-hidden text-ellipsis"> I offer expert guidance on all aspects of
                    mobile application integration using React Native. With 7 years of experience in developing mobile
                    apps, I can help you navigate challenges and build seamless solutions. </p>
                <div className="flex justify-between items-center">
                    <Rating />
                    <Button variant={"outline"} className="shadow-none"> Contact Me </Button>
                </div>
            </div>
        </>
    )
}

export default ConsultantCard