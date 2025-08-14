import GenericButton from "../../components/GenericButton";

function ProjectPage() {
    return (
        <div id="projectPage-container">
            <link href="/public/ProjectPage.css" rel="stylesheet" />
            <link href="/src/index.css" rel="stylesheet" />
            <div id="projectPage-top-container">
                <div id="projectPage-header">
                    <p id="projectPage-header-text">Projects</p>
                    <p id="projectPage-header-body">At Blueprint, we develop tech solutions that drive positive change. In partnership with nonprofits, our projects address real-world challenges with a focus on transparency and accessibility. All of our work is open source, allowing everyone to see our progress. Explore our projects and learn how we’re making an impact.</p>
                    <GenericButton 
                    label="See our GitHub" 
                    style={{ marginLeft: "0" }}
                    />
                </div>
            </div>

            <div className="w-[644.6px] flex flex-col items-center mx-auto gap-[144.3px]">
                <div className="text-center flex flex-col items-center mt-[142.2px] max-w-[644.2px]">
                    <h1 className="text-[55.3px] mb-[13.7px] text-[#333]">Coming Soon...</h1>
                    <p className="17.3px">We’re currently in the early stages of our 2025–2026 cycle and haven’t launched any projects just yet,
                        but they’re on the way. Check back soon to see the exciting work our teams will be bringing to life throughout the year!</p>
                </div>
                <div className="text-center">
                    <h1 className="text-[55.3px] text-[#333]">Partner with Us</h1>
                    <p className="text-[17.3px] text-[#333]">
                        If you’re a nonprofit in need of innovative tech solutions, we’re here to help. Blueprint offers open-source, accessible technology tailored to your needs.
                         Let’s collaborate to create practical solutions that support your mission and goals.
                    </p>
                    <div className="flex justify-center mt-[19.6px] mb-[205.7px]">
                        <GenericButton 
                        label="Non-profit" 
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectPage;