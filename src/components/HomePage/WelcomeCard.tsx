// Implement the WelcomeCard component
// Reference Zeplin General Page for the design specs
// It includes:
// The introduction sprite
// The introduction text

import TeamPlus from "../../assets/images/TeamPlus.svg";

function WelcomeCard() {

    const containerStyle = {
        fontSize: "50px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    }

    const rowStyle = {
        display: "inline-flex",
        alignItems: "center"
    };

    const imgStyle = {
        verticalAlign: "middle",
    };

    return (
        <div>
            <div style={containerStyle} id="welcome-card-container">
            <style>
                {`
                    img {
                        height: 1.6em
                    }
                    @media (max-width: 1000px) {
                        .t { font-size: 40px; }
                        #test { height: 64px; }
                    }

                    @media (max-width: 750px) {
                        .t { font-size: 30px; }
                        #test { height: 48px; }
                    }

                    @media (max-width: 550px) {
                        .t { font-size: 20px; }
                        #test { height: 32px; }
                    }

                    @media (max-width: 550px) {
                        .t { font-size: 14px; }
                        #test { height: 18px; }
                    }
                `}
            </style>
                <p className="t text-[#333]">We are a student-led</p>
                <div style={rowStyle}>
                    <p className="t text-[#333]">organization</p>
                    <img src={TeamPlus} style={imgStyle} id="test"/>
                    <p className="t text-[#333]">creating tech</p>
                </div>
                <p className="t text-[#333]">solutions for nonprofits.</p>
            </div>
        </div>
    )
}

export default WelcomeCard;