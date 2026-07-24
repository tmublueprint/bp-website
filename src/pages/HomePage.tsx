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
import HomeCard from "../components/HomePage/HomeCard";
import HomePageButton from "../components/HomePage/HomePageButton";
import WelcomeCard from "../components/HomePage/WelcomeCard";
import '../index.css';
import '../assets/css/HomePage.css';
import PeopleVectors from "../assets/images/people-vectors.svg";
import ProjectImage from "/src/assets/images/project.jpg";
import SquirrelRehabImage from "/src/assets/images/squirrel_rehab.jpg";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div id="homePage-container">
            <div id="top-container">
                <img src={PeopleVectors} id="people-vectors" />
                <WelcomeCard></WelcomeCard>
            </div>
            <div id="bottom-container">
                <HomePageButton
                    link="/about"
                    text="About Us"
                    style={{
                        background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                        width: "130px",
                        marginBottom: "60px",
                    }}>
                </HomePageButton>

                <div id="homePage-our-work-header">
                    <h2 id="homePage-our-work" className="text-[#333]">Our work</h2>
                    <span id="homePage-project-button"><HomePageButton
                        link="/project"
                        arrowOnly={true}
                        arrowSize="14px"
                        style={{
                            background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                            width: "50px",
                            margin: "auto"
                        }}>
                    </HomePageButton></span>
                </div>
                <div id="homePage-scroll-container">
                    <div id="homePage-card-container">
                        <Link to="/project#itty-bitty-critter" style={{ textDecoration: "none" }}>
                            <HomeCard
                                style={{
                                    backgroundImage: `url(${SquirrelRehabImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    position: "relative",
                                    cursor: "pointer",
                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                    borderRadius: "24px",
                                }}></div>
                                <p className="text-white text-base font-semibold" style={{ position: "relative", zIndex: 1, alignSelf: "flex-end", padding: "20px", paddingBottom: "28px", lineHeight: "1.3" }}>Itty Bitty Critters Wildlife Rehabilitation</p>
                            </HomeCard>
                        </Link>
                        <Link to="/project#furever" style={{ textDecoration: "none" }}>
                            <HomeCard
                                style={{
                                    backgroundImage: `url(${ProjectImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    position: "relative",
                                    cursor: "pointer",
                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                    borderRadius: "24px",
                                }}></div>
                                <p className="text-white text-lg font-semibold" style={{ position: "relative", zIndex: 1, alignSelf: "flex-end", padding: "20px" }}>Fur-Ever Wild Rehabilitation</p>
                            </HomeCard>
                        </Link>
                        <HomeCard
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p className="text-black text-lg">Coming Soon</p>
                        </HomeCard>
                    </div>
                </div>
                <ValuesCard />
                <StudentInvolvementCard></StudentInvolvementCard>
            </div>
        </div>
    )
}

export default HomePage;