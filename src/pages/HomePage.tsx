// Home page
// should include these components:
// - NavBar
// - WelcomeCard
// - WorkCarouselCard 
// - ValuesCard
// - StudentInvolvementCard
// - Footer

import StudentInvolvementCard from "../components/HomePage/StudentInvolvementCard";

function HomePage() {
    return (
        <>
            {/* Hello this is the home page */}
            <div>
                <StudentInvolvementCard></StudentInvolvementCard>
            </div>
        </>
        
    )
}

export default HomePage;