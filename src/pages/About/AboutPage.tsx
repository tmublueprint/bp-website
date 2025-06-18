import LeadershipCard from "../../components/AboutPage/LeadershipCard";
function AboutPage() {
    const names = [
        "vichekaoeun",
        "zachary-toye-nakamura",
        "kristina-truong-1kt",
        "naetri-niranjan",
        "ammar-ahmad1",
        "aaishwin-sathisshkumar-87826b2b6"
    ]
    
    return (
        <>
            <LeadershipCard 
                name="Zachary Toye-Nakamura"
                title="Co-president"
                imageUrl="zach-pic.png"
                linkedinUrl={`https://www.linkedin.com/in/${names[1]}`}
            />
            <LeadershipCard 
                name="Vicheka Oeun"
                title="Co-president"
                imageUrl="vic-pic.png"
                linkedinUrl={`https://www.linkedin.com/in/${names[0]}`}
            />
        </>
    )
}

export default AboutPage;