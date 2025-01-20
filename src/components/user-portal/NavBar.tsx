import {NavLink} from "react-router";
import GuideMeLogoBlack from "@/assets/images/guide-me-logo-black.svg";
import {Mail, Bell, HelpCircle} from 'lucide-react';
import UserProfilePhoto from "@/components/ui/UserProfilePhoto.tsx";

function NavBar() {
    return (
        <div className="w-full border-b">
            <div className="container mx-auto md:flex md:flex-row justify-between items-center py-3 px-6">
                {/* Left section */}
                <div className="flex gap-12">
                    <NavLink to="/" end>
                        <img src={GuideMeLogoBlack} alt="GuidMe Logo" className='-mt-1'/>
                    </NavLink>
                    <ul className="inline-flex gap-8 decoration-0">
                        <li className='tracking-tight hover:text-primary'>Account Information</li>
                    </ul>
                </div>

                {/*   Right Section  */}
                <div className="flex gap-6 items-center">

                    {/* Search Input */}
                    <Mail width={ 22 } height={ 22 } className="text-slate-500" />
                    <Bell width={ 22 } height={ 22 } className="text-slate-500"  />
                    <HelpCircle width={ 22 } height={ 22 } className="text-slate-500"  />
                    <UserProfilePhoto size={ { width: 9, height: 9 }} />
                </div>

            </div>
        </div>
    )
}

export default NavBar;