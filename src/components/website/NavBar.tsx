import {AlignJustifyIcon, SearchIcon} from "lucide-react";
import GuideMeLogoBlack from "@/assets/images/guide-me-logo-black.svg";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router";

function NavBar() {

    const navigate = useNavigate();

    return (
        <div className="border-b">
            {/* Mobile */}
            <div className="md:hidden flex flex-row justify-between py-4 px-6 ">
                <div className="flex flex-row gap-4 items-center">
                    <AlignJustifyIcon size={24}></AlignJustifyIcon>
                    <NavLink to="/" end>
                        <img src={GuideMeLogoBlack} alt="GuidMe Logo" className='h-6 -mt-1'/>
                    </NavLink>
                </div>
                <div className="flex gap-4 items-center">
                    <a href="#" className='text-md tracking-tight'>Sign up</a>
                    <SearchIcon size={24}></SearchIcon>
                </div>
            </div>
            {/*  Desktop   */}
            <div className="fixed z-50 bg-white w-full border-b">
                <div className="hidden container mx-auto md:flex flex-row justify-between items-center py-3 px-6">

                    {/* Left section */}
                    <div className="flex gap-12">
                        <NavLink to="/" end>
                            <img src={GuideMeLogoBlack} alt="GuidMe Logo" className='-mt-1'/>
                        </NavLink>
                        <ul className="inline-flex gap-8 decoration-0">
                            <li className='tracking-tight hover:text-primary'>Request Guidance</li>
                            <li className='tracking-tight hover:text-primary'>Provide Guidance</li>
                            <li className='tracking-tight hover:text-primary'>About Website</li>
                            <li className='tracking-tight hover:text-primary'>What's New</li>
                            <li className='tracking-tight hover:text-primary'>Pricing</li>
                        </ul>
                    </div>

                    {/*   Right Section  */}
                    <div className="flex gap-4 items-center">

                        {/* Search Input */}
                        <div className='inline-flex border rounded-3xl py-2 px-2 gap-2'>
                            <SearchIcon size={24}></SearchIcon>
                            <input type="text" placeholder='search' className="focus:outline-none"/>
                        </div>
                        <NavLink className='text-md tracking-tight hover:text-primary' to="/login" >
                            Log in
                        </NavLink>
                        <Button onClick={ () => { navigate("/signup") } }> Sign up </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default NavBar;