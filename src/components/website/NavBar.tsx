import {AlignJustifyIcon, SearchIcon} from "lucide-react";
import GuideMeLogoBlack from '../../assets/images/guideme-logo-black.svg'
import {Button} from "@/components/ui/button.tsx";

function NavBar() {
    return (
        <div className="border-b">
            {/* Mobile */}
            <div className="md:hidden container mx-auto flex flex-row justify-between py-4 px-6 ">
                <div className="flex flex-row gap-4 items-center">
                    <AlignJustifyIcon size={24}></AlignJustifyIcon>
                    <img src={GuideMeLogoBlack} alt="GuidMe Logo" className='h-6 -mt-1'/>
                </div>
                <div className="flex gap-4 items-center">
                    <a href="#" className='text-md tracking-tight'>Sign up</a>
                    <SearchIcon size={24}></SearchIcon>
                </div>
            </div>
            {/*  Desktop   */}
            <div className="hidden container mx-auto md:flex flex-row justify-between items-center py-3 px-6">

                {/* Left section */}
                <div className="flex gap-12">
                    <img src={GuideMeLogoBlack} alt="GuidMe Logo" className='-mt-1'/>
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
                    <a href="#" className='text-md tracking-tight hover:text-primary'>Log in</a>
                    <Button> Sign up </Button>
                </div>

            </div>
        </div>
    )
}


export default NavBar;