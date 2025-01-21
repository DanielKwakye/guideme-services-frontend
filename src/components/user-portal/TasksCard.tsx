import UserProfilePhoto from "@/components/ui/UserProfilePhoto.tsx";
import {Heart} from "lucide-react";
import UserNameInfo from "@/components/ui/UserNameInfo.tsx";
import {Button} from "@/components/ui/button.tsx";

function TasksCard() {
    return (
        <div className="hover:bg-slate-100 flex flex-col cursor-pointer py-8 px-5 gap-4">

            {/* -- Title Section ------  */}
            <div className="flex flex-row justify-between items-center">

                <div className="flex flex-row gap-4 items-center">
                    <UserProfilePhoto size={ {width: 8, height: 8} }/>
                    <UserNameInfo user={ { name: "Dominic Saha", position: "Software developer"} } />
                </div>

                <div className="flex flex-row items-center gap-4">
                    <Heart size={20} />
                    <Button> Offer guidance </Button>
                </div>

            </div>
            {/* End of Title section */}



            {/* -- Body Section ------  */}
            <div className="space-y-4">
                <p className="font-bold">Linked In Auth Integration</p>
                <p>
                    Hi Professionals, I need one-on-one guidance on integrating LinkedIn authentication with React
                    Native? Online resources haven't been helpful. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cum nihil provident quis reprehenderit.
                </p>
                <div className="flex flex-row gap-2">
                    <div
                        className="cursor-pointer py-2 px-4 bg-slate-200 hover:bg-black hover:text-white rounded-l-3xl rounded-r-3xl inline-flex flex-row gap-2 items-center">
                        <small>React Native</small>
                    </div>
                    <div
                        className="cursor-pointer py-2 px-4 bg-slate-200 hover:bg-black hover:text-white rounded-l-3xl rounded-r-3xl inline-flex flex-row gap-2 items-center">
                        <small>Firebase Authentication</small>
                    </div>
                </div>

            </div>

            {/* -- Footer Section ------  */}
            <div className="flex flex-row gap-2 justify-between">
                <small>Posted 22 minutes ago</small>
                <small className="font-bold">Offering: CAD $5/hr </small>
            </div>


        </div>
    )
}

export default TasksCard;