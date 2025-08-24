// The student card component, it has a call to action and links to the students page.
// Responsiveness is effectively ok until ~260px. This may be improve in the future by either using @media and max-width, and/or css in terms of vh.

import NorthEastArrow from '/public/north-east-arrow.svg';
import HomePageButton from "../HomePage/HomePageButton";

function StudentInvolvementCard() {
    return (
        <div id="stdInvolv-center-container">
            <link href="/public/StudentInvolvementCard.css" rel="stylesheet"></link>
            <link href="/src/index.css" rel="stylesheet"></link>
            <div className="heading" id="stdInvolv-heading">Get Involved</div>
            <div className="heading center" id="stdInvolv-body">Want to make an impact or be part of exciting events? We’re looking for passionate project leads and developers to join our team. Be part of something meaningful and help us drive positive change!</div>
            <HomePageButton
                    link="/StudentPage"
                    text="Students"
                    style = {{
                        background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                        width: "130px",
                    }}>
            </HomePageButton>
        </div>
    )
}

export default StudentInvolvementCard;