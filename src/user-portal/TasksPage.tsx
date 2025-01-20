import NavBar from "@/components/user-portal/NavBar.tsx";
import Footer from "@/components/website/Footer.tsx";
import SideBar from "@/components/user-portal/SideBar.tsx";
import PostEditor from "@/components/user-portal/PostEditor.tsx";

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