import NavBar from "@/components/user-portal/NavBar.tsx";
import Footer from "@/components/website/Footer.tsx";
import SideBar from "@/components/user-portal/SideBar.tsx";
import PostEditor from "@/components/user-portal/PostEditor.tsx";
import { Sparkles } from 'lucide-react';

function TasksPage() {
    return (
        <div>
            {/* Menu items */}
            <NavBar />

            {/* Body */}
            <main className="container mx-auto py-12 flex flex-row gap-10 px-6">

                {/*   Content Panel */}
                <div className="flex flex-col w-full">

                    <PostEditor />

                {/*  Add chips like showwcase did here, for the ff categories ( Recent posts, bookmarked posts ) */}
                    <div className="flex flex-row my-4">
                        <div className="py-2 px-4 bg-primary text-white rounded-full inline-flex flex-row gap-2 items-center">
                            <Sparkles size={18} />
                            <small>Recent</small>
                        </div>
                    </div>


                </div>
                {/* End of Content Panel */}


                {/*   Sidebar */}
                <SideBar />

            </main>

            {/*  Footer  */}
            <Footer />
        </div>
    )
}

export default TasksPage;