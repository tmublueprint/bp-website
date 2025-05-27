// Implement the NavBar component
// Reference Zeplin General Page for the design specs
// Recommendation:
// Split into two rows and the second row should include 3 columns
// Within each card it should include 3 rows, details based off the design

function ValuesCard() {
    // Code goes here

    return (
        <div className="flex flex-col m-4 gap-20">
            <div className="flex justify-center">
                <h1 className="text-6xl font-bold">Our Values</h1>
            </div>
            <div className="flex flex-row justify-center gap-6 mx-30">
                <div className="Vector flex flex-col gap-4 rounded-2xl">
                    <div className="">
                        <img src="Light bulb vector.svg" alt="Light bulb icon" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Innovation</h1>
                    </div>
                    <div>
                        <span className="text-2xl font-regular">
                            At Blueprint, we focus on using technology to solve real problems.
                            Through innovation, we create new solutions that make a positive impact.
                            We constantly look for ways to improve and push the limits of what technology can do for people.
                        </span>
                    </div>
                </div>
                <div className="Vector flex flex-col gap-4 rounded-2xl">
                    <div className="">
                        <img src="Heart vector.svg" alt="Heart icon" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Community</h1>
                    </div>
                    <div className="">
                        <span className="text-2xl font-regular ">
                            We believe technology should be for everyone.
                            With community and inclusion, we make sure that all people have access to the benefits of technology,
                            no matter who they are or where they come from. We work to create equal opportunities in everything we do.
                        </span>
                    </div>
                </div>
                <div className="Vector flex flex-col gap-4 rounded-2xl">
                    <div className="">
                        <img src="Balance vector.svg" alt="Balance icon" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Responsibility</h1>
                    </div>
                    <div>
                        <span className="text-2xl font-regular">
                            We take responsibility for the impact of our technology.
                            Through responsibility and ethics, we make sure our work is fair, honest, and sustainable.
                            We focus on protecting privacy, and ensuring our technology is used in ways that benefit everyone.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValuesCard;