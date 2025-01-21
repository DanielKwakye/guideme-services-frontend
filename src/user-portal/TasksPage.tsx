import NavBar from "@/components/user-portal/NavBar.tsx";
import Footer from "@/components/website/Footer.tsx";
import SideBar from "@/components/user-portal/SideBar.tsx";
import PostEditor from "@/components/user-portal/PostEditor.tsx";
import { Sparkles, FolderHeart, Newspaper } from 'lucide-react';
import TasksCard from "@/components/user-portal/TasksCard.tsx";

function TasksPage() {
    return (
        <div>
            {/* Menu items */}
            <NavBar />

            {/* Body */}
            <main className="container mx-auto py-12 flex flex-row gap-10 px-6">

                {/*   Content Panel */}
                <div className="flex flex-col w-full">

                    <PostEditor/>

                    {/*  categories ( Recent posts, bookmarked posts ) */}
                    <div className="flex flex-row my-4 gap-4">
                        <div
                            className="cursor-pointer py-2 px-4 bg-black hover:bg-primary text-white rounded-full inline-flex flex-row gap-2 items-center">
                            <Sparkles size={18}/>
                            <small>Best Matches</small>
                        </div>

                        <div
                            className="cursor-pointer py-2 px-4 border hover:bg-slate-100 rounded-full inline-flex flex-row gap-2 items-center">
                            <Newspaper size={18}/>
                            <small>Recent Posts</small>
                        </div>

                        <div
                            className="cursor-pointer py-2 px-4 border hover:bg-slate-100 rounded-full inline-flex flex-row gap-2 items-center">
                            <FolderHeart size={18}/>
                            <small>Saved Posts</small>
                        </div>
                    </div>
                    {/*  End of categories   */}

                    {/* Listed tasks */}
                    <div className="flex flex-col divide-y divide-slate-100 ">
                        <TasksCard/>
                        <TasksCard/>
                        <TasksCard/>
                    </div>

                    {/* End of listed tasks */}



                </div>
                {/* End of Content Panel */}


                {/*   Sidebar */}
                <SideBar/>

            </main>

            {/*  Footer  */}
            <Footer/>
        </div>
    )
}

export default TasksPage;