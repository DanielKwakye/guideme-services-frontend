import DummyProfilePhoto from "@/assets/images/gm-dummy-profile-photo.svg";
import {Size} from "@/lib/interfaces.ts";

function UserProfilePhoto( { className = '', size } : { className?: string, size?: Size } ) {
    return (<>
        <div className={`w-${size?.width || 12 } h-${size?.height || 12}  bg-primary rounded-full overflow-clip ${className}`}>
            <img src={DummyProfilePhoto} alt="" className={`w-full h-full object-cover`}/>
        </div>
    </>)
}

export default UserProfilePhoto;