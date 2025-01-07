import {StarIcon} from "lucide-react";

function Rating() {
    return (
        <div className="flex gap-2">
            <StarIcon fill="true" size={20} />
            <StarIcon fill="true" size={20}/>
            <StarIcon size={20} />
        </div>
    )
}

export default Rating