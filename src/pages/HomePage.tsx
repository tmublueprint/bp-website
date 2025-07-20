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
        <div id="homePage-container">
            <link href="/public/HomePage.css" rel="stylesheet" />
            <link href="/src/index.css" rel="stylesheet" />
            <div id="top-container">
                <img src="public/people-vectors.svg" id="people-vectors"/>
                <img src="public/team-callout.svg" id="team-callout"/>
            </div>
            <div id="homePage-card-container">
                <Card>
                    <p className="text-black text-lg">Testing</p>
                </Card>
                <Card>
                    <img src="public/logo.png" alt="example" className="object-contain w-full h-full" />
                </Card>
                <Card>
                    <p className="text-black text-lg">Testing</p>
                </Card>
            </div>
            <ValuesCard />
            <StudentInvolvementCard></StudentInvolvementCard>
        </div>

    )
}

export default HomePage;