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
import GenericButton from "../components/GenericButton";


function HomePage() {
    return (
        <>
            <GenericButton label="Contact Us"/>
            <ValuesCard />
            {/*<StudentInvolvementCard></StudentInvolvementCard>*/}
        </>

    )
}

export default HomePage;