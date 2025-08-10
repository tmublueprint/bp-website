function ValuesCard() {
    return (
        <div className="flex flex-col mx-4 mt-12 mb-16 gap-8 lg:gap-12">
            <div className="flex mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-[70px] font-bold text-center">Our Values</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:max-w-7xl lg:mx-auto">
                <div className="Vector flex flex-col gap-4 rounded-2xl w-full sm:w-96 md:w-[420px] lg:w-96 xl:w-[440px]">
                    <div className="">
                        <img src="Light bulb vector.svg" alt="Light bulb icon" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Innovation</h1>
                    </div>
                    <div>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                            At Blueprint, we focus on using technology to solve real problems.
                            Through innovation, we create new solutions that make a positive impact.
                            We constantly look for ways to improve and push the limits of what technology can do for people.
                        </p>
                    </div>
                </div>
                <div className="Vector flex flex-col gap-4 rounded-2xl w-full sm:w-96 md:w-[420px] lg:w-96 xl:w-[440px]">
                    <div className="">
                        <img src="Heart vector.svg" alt="Heart icon" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Community</h1>
                    </div>
                    <div className="">
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                            We believe technology should be for everyone.
                            With community and inclusion, we make sure that all people have access to the benefits of technology,
                            no matter who they are or where they come from. We work to create equal opportunities in everything we do.
                        </p>
                    </div>
                </div>
                <div className="Vector flex flex-col gap-4 rounded-2xl w-full sm:w-96 md:w-[420px] lg:w-96 xl:w-[440px]">
                    <div className="">
                        <img src="Balance vector.svg" alt="Balance icon" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Responsibility</h1>
                    </div>
                    <div>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                            We take responsibility for the impact of our technology.
                            Through responsibility and ethics, we make sure our work is fair, honest, and sustainable.
                            We focus on protecting privacy, and ensuring our technology is used in ways that benefit everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValuesCard;