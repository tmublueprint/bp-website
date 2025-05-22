// The student card component, it has a call to action and links to the students page.
// Responsiveness is effectively ok until ~260px. This may be improve in the future by either using @media and max-width, and/or css in terms of vh.

import "@fontsource/poppins";
import NorthEastArrow from '/public/north-east-arrow.svg';

function StudentInvolvementCard() {
    return (
        <div id="stdInvolv-center-container">
            <link href="/public/StudentInvolvementCard.css" rel="stylesheet"></link>
            <link href="/src/index.css" rel="stylesheet"></link>
            <div className="heading" id="stdInvolv-heading">Get Involved</div>
            <div className="heading center" id="stdInvolv-body">Want to make an impact or be part of exciting events? We’re looking for passionate project leads and developers to join our team. Be part of something meaningful and help us drive positive change!</div>
            <div>
                <a id="stdInvolv-link" href="/StudentPage">
                    <p id="stdInvolv-link-text">Students</p>
                    <img src={NorthEastArrow} alt="arrow" className="north-east-arrow"/>
                </a>
            </div>
        </div>
    )
}

export default StudentInvolvementCard;