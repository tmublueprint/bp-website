// Home page
// should include these components:
// - NavBar
// - WelcomeCard
// - WorkCarouselCard 
// - ValuesCard
// - StudentInvolvementCard
// - Footer

import StudentInvolvementCard from "../components/HomePage/StudentInvolvementCard";
import NavBar from "../components/HomePage/NavBar";
import ValuesCard from "../components/HomePage/ValuesCard";
import GenericButton from "../components/GenericButton";
import Card from "../components/Card";


function HomePage() {
    return (
        <>
            <NavBar></NavBar>
            <Card>
                <p className="text-white text-lg">Testing</p>
            </Card>
            <Card>
                <img src="public/logo.png" alt="example" className="object-contain w-full h-full" />
            </Card>
            <ValuesCard />
            <StudentInvolvementCard></StudentInvolvementCard>
        </>
    )
}

export default HomePage;