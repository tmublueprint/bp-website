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
import HomeCard from "../components/HomePage/HomeCard";
import HomePageButton from "../components/HomePage/HomePageButton";
import WelcomeCard from "../components/HomePage/WelcomeCard";

import React, { useRef } from "react";

function HomePage() {
    return (
        <div id="homePage-container">
            <link href="/public/HomePage.css" rel="stylesheet" />
            <link href="/src/index.css" rel="stylesheet" />
            <div id="top-container">
                <img src="public/people-vectors.svg" id="people-vectors"/>
                <WelcomeCard></WelcomeCard>
            </div>
            <div id="bottom-container">
                <HomePageButton
                    link="/about"
                    text="About Us"
                    style = {{
                        background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                        width: "130px",
                        marginBottom: "60px",
                    }}>
                </HomePageButton>

                <div id="homePage-our-work-header">
                    <h2 id="homePage-our-work">Our work</h2>
                    <span id="homePage-project-button"><HomePageButton
                        link="/project"
                        arrowOnly = {true}
                        arrowSize = "14px"
                        style = {{
                            background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                            width: "50px",
                            margin: "auto"
                        }}>
                    </HomePageButton></span>
                </div>
                <div id="homePage-scroll-container">
                    <div id="homePage-card-container">
                        {/* <HomeCard 
                            style = {{
                                background: "transparent",
                                border: "0px",
                                boxShadow: "none",
                            }}
                        ></HomeCard> */}
                        <HomeCard
                            style = {{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p className="text-black text-lg">Coming Soon</p>
                        </HomeCard>
                        <HomeCard
                            style = {{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p className="text-black text-lg">Coming Soon</p>
                        </HomeCard>
                        <HomeCard
                            style = {{
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