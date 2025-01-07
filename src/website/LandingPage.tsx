import NavBar from "@/components/website/NavBar.tsx";
import Header from "@/components/website/Header.tsx";
import ConsultantCard from "@/components/website/ConsultantCard.tsx";
import ClientCard from "@/components/website/ClientCard.tsx";

function LandingPage() {
    return (
        <div className="space-y-20">
            {/* Menu items */}
            <NavBar />

            {/* Page Content */}
            <div className="h-2"></div>
            <div className="container mx-auto px-48 space-y-12">

                {/*  Page Header   */}
                <Header/>

                {/* Consultants section    */}
                <section className="">
                    <h1 className="text-4xl font-bold">Consultants</h1>
                    <p className="max-w-screen-md">Experienced professionals offering personalized guidance to help you achieve your goals efficiently.</p>
                    <div className="h-12"></div>
                    <div className="flex gap-4 overflow-hidden">
                        <ConsultantCard/>
                        <ConsultantCard name="Priyanka Saha" title="AI Engineer"/>
                        <ConsultantCard/>

                    </div>
                </section>

                {/* Learners section    */}

                <section className="">
                    <h1 className="text-4xl font-bold">Learners</h1>
                    <p className="max-w-screen-md"> Individuals seeking guidance and insights to overcome challenges and grow with expert mentorship. </p>
                    <div className="h-12"></div>
                    <div className="flex gap-4 overflow-hidden">
                        <ClientCard/>
                        <ClientCard name="Priyanka Saha" title="AI Engineer"/>
                        <ClientCard/>

                    </div>
                </section>

            </div>


        </div>
    )
}

export default LandingPage;