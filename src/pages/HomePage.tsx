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

import React, { useRef } from "react";

function HomePage() {
    return (
        <div id="homePage-container">
            <link href="/public/HomePage.css" rel="stylesheet" />
            <link href="/src/index.css" rel="stylesheet" />
            <div id="top-container">
                <img src="public/people-vectors.svg" id="people-vectors"/>
                <img src="public/team-callout.svg" id="team-callout"/>
            </div>
            <div id="bottom-container">
                <a href="/about"><GenericButton
                    label="About Us"
                    style={{ /* Class variables can't override inline thus I'm doing it this way */
                        background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                        color: "black",
                        width: "150px",
                        margin: "auto",
                        marginBottom: "4rem",
                        display: "block" /* Flex breaks it */
                    }}
                /></a>

                <div id="homePage-our-work-header">
                    <h2 id="homePage-our-work">Our work</h2>
                    <a href="/project" id="homePage-project-button"><GenericButton
                        label=""
                        style={{
                            background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                            color: "black",
                            width: "50px",
                            height: "35px",
                            position: "relative",
                            padding: "0 8px 0 0"
                             /* Flex breaks it */
                        }}
                    /></a>
                </div>
                <div id="homePage-scroll-container">
                    <div id="homePage-card-container">
                        <Card
                            style = {{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p className="text-black text-lg">Coming Soon</p>
                        </Card>
                        <Card>
                            <img src="public/logo.png" alt="example" className="object-contain w-full h-full" />
                        </Card>
                        <Card
                            style = {{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p className="text-black text-lg">Coming Soon</p>
                        </Card>
                    </div>
                </div>
                <ValuesCard />
                <StudentInvolvementCard></StudentInvolvementCard>
            </div>
        </div>
    )
}

export default HomePage;