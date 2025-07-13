import LeadershipCard from "../../components/AboutPage/LeadershipCard";
import FaceCircle from "../../components/FaceCircle";

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
        new Person("Zachary Toye-Nakamura", "Co-president", "zach-pic.png", "zachary-toye-nakamura"),
        new Person("Vicheka Oeun", "Co-president", "vic-pic.png", "vichekaoeun"),
        new Person("Kristina Truong", "Co-president", "kristina-pic.png", "kristina-truong-1kt"),
        new Person("Naetri Niranjan", "Co-president", "naetri-pic.png", "naetri-niranjan"),
        new Person("Ammar Ahmad", "Co-president", "ammar-pic.png", "ammar-ahmad1"),
        new Person("Aaishwin Sathisshkumar", "Co-president", "aaishwin-pic.png", "aaishwin-sathisshkumar-87826b2b6")
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
        <div>
            <link href="/public/AboutPage.css" rel="stylesheet"/>
            <link href="/src/index.css" rel="stylesheet"/>
            <div id="aboutPage-faceCircle-container">
                <FaceCircle />
                <div id="aboutPage-title-container">
                    <h1 id="aboutPage-title">About Us</h1>
                    <p id="aboutPage-title-text">Blueprint is a nonprofit that empowers students to build tech for social good. Through projects, mentorship, and events, we strive to create real-world impact.</p>
                </div>
            </div>
            <h1 id="aboutPage-cards-title">Our Leadership</h1>
            <div id="aboutPage-cards-container">
                {cards}
            </div>
        </div>
    )
}

export default AboutPage;