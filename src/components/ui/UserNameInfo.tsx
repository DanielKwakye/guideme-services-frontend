import {User} from "@/lib/interfaces.ts";

function UserNameInfo({ user, align = 'left' } : { user: User, align?: 'center' | 'left' | 'right' }) {
    return (
        <>
            <div className={`flex flex-col text-${align}`}>
                <p className="text-lg font-bold"> {user.name} </p>
                <small>{user.position}</small>
            </div>
        </>
    )
}

export default UserNameInfo;