import GenericButton from "../../components/GenericButton";
import ProjectCard from "../../components/Projects/ProjectCard";
import SquirrelImage from "/src/assets/images/squirrel.jpg";
import RaccoonImage from "/src/assets/images/resue_raccoon.jpg";
import '/src/assets/css/ProjectPage.css';

function ProjectPage() {
    return (
        <div className="Vector-bg-contact">
        <div id="projectPage-container">
            <div id="projectPage-top-container">
                <div id="projectPage-header">
                    <p id="projectPage-header-text">Projects</p>
                    <p id="projectPage-header-body">At Blueprint, we develop tech solutions that drive positive change. In partnership with nonprofits, our projects address real-world challenges with a focus on transparency and accessibility. All of our work is open source, allowing everyone to see our progress. Explore our projects and learn how we're making an impact.</p>
                    <GenericButton 
                        label="See our GitHub" 
                        style={{ 
                            marginLeft: "0",
                            background: "linear-gradient(90deg, #94c9ff, #76b7fb, #489cf4, #2788f0, #137ced, #0c78ec)",
                            color: "white"
                        }}
                        onClick={() => window.open("https://github.com/tmublueprint/bp-website", "_blank")}
                    />
                </div>
            </div>

            <div id="projectPage-cards-container">
                <div id="itty-bitty-critter" className="project-card-wrapper">
                    <h2 className="project-card-title">Itty Bitty Critters Wildlife Rehabilitation</h2>
                    <ProjectCard 
                        npoName="About the NPO"
                        npoDescription="Itty Bitty Critter is a nonprofit dedicated to rescuing and rehabilitating small animals in need. They work to provide shelter, medical care, and find loving forever homes for animals of all sizes."
                        solution="We built them their own website and integrated with it a blog, additionally we also built a personal content management system allowing the NPO admins to manage their own content."
                        bannerImage={SquirrelImage}
                        githubUrl="https://github.com/tmublueprint/bp-ibc"
                    />
                </div>
                <div id="furever" className="project-card-wrapper">
                    <h2 className="project-card-title">Fur-Ever Wild Rehabilitation</h2>
                    <ProjectCard 
                        npoName="About the NPO"
                        npoDescription="Furever is a nonprofit that rescues and rehabilitates orphaned, injured, sick, and displaced wildlife, aiming to return them to their natural habitat. They are licensed by Ontario's Ministry of Natural Resources & Forestry."
                        solution="We built them a website that helps direct visitors to the right resources and information for wildlife rescue and rehabilitation. These include a wildlife emergency hotline, a wildlife rehabilitation guide, volunteering support and an embedded educational resource."
                        bannerImage={RaccoonImage}
                        githubUrl="https://github.com/tmublueprint/bp-furever"
                        websiteUrl="https://www.fureverwildrehabilitation.ca/"
                    />
                </div>
            </div>

            <div className="text-center w-full max-w-[644.6px] px-4 flex flex-col items-center mx-auto mt-[80px] md:mt-[120px]">
                <div className="text-center w-full">
                    <h1 className="text-[40px] font-bold text-[55.3px] text-[#333]">Partner with Us</h1>
                    <p className="text-[16px] text-[17.3px] text-[#333]">
                        If you're a nonprofit in need of innovative tech solutions, we're here to help. Blueprint offers open-source, accessible technology tailored to your needs.
                         Let's collaborate to create practical solutions that support your mission and goals.
                    </p>
                    <div className="flex justify-center mt-[19.6px] mb-[100px] md:mb-[205.7px]">
                        <GenericButton 
                            label="Non-profit"
                            to="/npo"
                            style={{
                                background: "linear-gradient(45deg, #c7e1fd35 9%, #a2d0fe82 59%, #94c9ffb0)",
                                color: "black"
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default ProjectPage;