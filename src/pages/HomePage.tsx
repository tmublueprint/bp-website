// Home page
// should include these components:
// - NavBar
// - WelcomeCard
// - WorkCarouselCard 
// - ValuesCard
// - StudentInvolvementCard
// - Footer

import StudentInvolvementCard from "../components/HomePage/StudentInvolvementCard";
import ValuesCard from "../components/HomePage/ValuesCard";

function HomePage() {
    return (
        <>
            <ValuesCard />
            {/*<StudentInvolvementCard></StudentInvolvementCard>*/}
        </>

    )
}

export default HomePage;