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
                    <p className="max-w-screen-md">Experienced professionals offering one-on-one guidance to help you complete your tasks efficiently.</p>
                    <div className="h-12"></div>
                    <div className="flex gap-4 overflow-hidden">
                        <ConsultantCard/>
                        <ConsultantCard name="Priyanka Saha" title="AI Engineer"/>
                        <ConsultantCard/>

                    </div>
                </section>

                {/* Learners section    */}

                <section className="">
                    <h1 className="text-4xl font-bold">Clients</h1>
                    <p className="max-w-screen-md"> Individuals seeking one-on-one guidance to complete challenging tasks. </p>
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