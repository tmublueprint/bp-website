import LeadershipCard from "../../components/AboutPage/LeadershipCard";
import FaceCircle from "../../components/FaceCircle";
import JoinTeamCard from "../../components/AboutPage/JoinTeamCard";
import '../../assets/css/AboutPage.css';
import '../../index.css';
import Zach from '/src/assets/images/zach-pic.png';
import Vic from '/src/assets/images/vic-pic.png';
import Kristina from '/src/assets/images/kristina-pic.png';
import Naetri from '/src/assets/images/naetri-pic.png';
import Ammar from '/src/assets/images/ammar-pic.png';
import Aaishwin from '/src/assets/images/aaishwin-pic.png';

function AboutPage() {
    class Person {
        name: string;
        title: string;
        imageUrl: string;
        linkedInUrl: string;

        constructor(name: string, title: string, imageUrl: string, linkedInUrl: string) {
            this.name = name;
            this.title = title;
            this.imageUrl = imageUrl;
            this.linkedInUrl = linkedInUrl;
        }
    }

    const people = [
        new Person("Zachary Toye-Nakamura", "Co-president", Zach, "zachary-toye-nakamura"),
        new Person("Vicheka Oeun", "Co-president", Vic, "vichekaoeun"),
        new Person("Kristina Truong", "VP of Outreach", Kristina, "kristina-truong-1kt"),
        new Person("Naetri Niranjan", "VP of Design", Naetri, "naetri-niranjan"),
        new Person("Ammar Ahmad", "VP of Operations", Ammar, "ammar-ahmad1"),
        new Person("Aaishwin Sathisshkumar", "VP of Social", Aaishwin, "aaishwin-sathisshkumar-87826b2b6")
    ]

    const cards = [];
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        cards.push(
            <LeadershipCard
                key={person.linkedInUrl}
                name={person.name}
                title={person.title}
                imageUrl={person.imageUrl}
                linkedinUrl={`https://www.linkedin.com/in/${person.linkedInUrl}`}
            />
        );
    }


    return (
        <div className="Vector-bg-about">
            <div id="aboutPage-faceCircle-container">
                <FaceCircle />
                <div id="aboutPage-title-container">
                    <h1 id="aboutPage-title">About Us</h1>
                    <p id="aboutPage-title-text">Blueprint is a nonprofit that empowers students to build tech for social good. Through projects, mentorship, and events, we strive to create real-world impact.</p>
                </div>
            </div>
            <div id="aboutPage-cards-mega-container">
            <h1 id="aboutPage-cards-title">Our Team</h1>
            <div id="aboutPage-cards-container">
                {cards}
            </div></div>
            <div id="aboutPage-join-card-container">
                <JoinTeamCard />
            </div>

        </div>
    )
}

export default AboutPage;