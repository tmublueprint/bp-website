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


function HomePage() {
    return (
        <>
            <NavBar></NavBar>
            <StudentInvolvementCard></StudentInvolvementCard>
        </>
        
    )
}

export default HomePage;