import NavBar from "@/components/website/NavBar.tsx";
import Header from "@/components/website/Header.tsx";

function LandingPage() {
    return (
        <div className="space-y-20">
            {/* Menu items */}
            <NavBar />

            {/* Page Content */}
            <div className="container mx-auto px-48">

                {/*  Page Header   */}
                <Header />



            </div>


        </div>
    )
}

export default LandingPage;