import DummyProfilePhoto from "@/assets/images/gm-dummy-profile-photo-2.svg";
import {Button} from "@/components/ui/button.tsx";

function ClientCard({ name = "Domnic Asiedu", title = "Software Engineer" } : { name?: string, title?: string } ) {
    return (
        <>
            <div className="border p-4 min-w-sm max-w-sm rounded-md space-y-8 cursor-pointer group-hover:text-white group-hover:bg-black">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-clip bg-primary">
                        <img src={DummyProfilePhoto} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-bold"> { name } </p>
                        <small>{ title }</small>
                    </div>
                </div>
                <p className="line-clamp-3 overflow-hidden text-ellipsis">  I'm looking for guidance on training an AI Deforum model. This is my first time working with such a model, and I’m unsure where to begin. I need step-by-step help to get started and understand the process. </p>
                <div className="flex justify-between">
                    <strong> CAD $9/hr </strong>
                    <Button variant={"outline"} className="shadow-none"> Provide assistance </Button>
                </div>
            </div>
        </>
    )
}

export default ClientCard;