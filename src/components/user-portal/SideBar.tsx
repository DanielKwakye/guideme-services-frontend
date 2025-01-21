import UserProfilePhoto from "@/components/ui/UserProfilePhoto.tsx";
import UserNameInfo from "@/components/ui/UserNameInfo.tsx";
import {Button} from "@/components/ui/button.tsx";

function SideBar() {
    return (
        <div className="flex flex-col gap-5 max-w-sm w-full">
            {/* Profile Information*/}
            <div className="flex flex-col items-center gap-4 border p-8 rounded">
                <UserProfilePhoto size={{width: 20, height: 20}}/>
                <UserNameInfo user={{name: "Jude Botchway", position: "Senior iOS Engineer"}} align='center'/>
                <Button variant={"outline"} className="w-full">Update Profile</Button>
            </div>

            {/* Availability Information */}
            <div className="flex flex-col gap-4 border p-8 items-center text-center rounded">
                <h1>Availability</h1>
                <p>Set your availability periods. Defaults to always available</p>
                <Button variant={"outline"} className="w-full">Always Available</Button>
            </div>

            {/* Request Feature */}
            <div className="flex flex-col gap-4 border p-8 items-center text-center rounded">
                <h1>Request Feature</h1>
                <p>Let's grow with you. Is there any feature you'd want us to consider?</p>
                <Button variant={"outline"} className="w-full">Tell us about it</Button>
            </div>

        </div>


    )
}

export default SideBar;