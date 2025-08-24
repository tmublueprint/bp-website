function AppCard() {
    return (
        <div className="mb-12 sm:mb-[134.1px]">
            <h1 className="font-['Poppins'] font-bold text-[55.3px] appheader-small mb-6 sm:mb-[57.9px] text-[#333333]">
                Application Process
            </h1>

            {/* Desktop horizontal number list – only show above 820px */}
            <div className="hidden lg:flex justify-center p-9">
                <img className="xl:w-[1185px] mx-auto" src="number-list-h.svg" />
            </div>

            {/* Mobile/Tablet stacked steps */}
            <div className="flex flex-col lg:flex-row items-center max-w-full lg:max-w-[1056px] xl:max-w-[1280px] gap-6 xl:gap-35 mx-auto">
                
                <div className="text-center px-4 mb-8 lg:mb-0">
                    <img src="number1.svg" alt="Step 1" className="block lg:hidden mx-auto mb-4 w-12 h-12" />
                    <h1 className="font-['Poppins'] font-semibold text-lg xl:text-[30px] pb-2 lg:pb-4">
                        Do your Research
                    </h1>
                    <p className="text-sm sm:text-base xl:text-[16.7px]">
                        Explore our ongoing projects and connect with us on our Instagram, LinkedIn and other socials to stay up to date.
                    </p>
                </div>

                <div className="text-center px-4 mb-8 lg:mb-0">
                    <img src="number2.svg" alt="Step 2" className="block lg:hidden mx-auto mb-4 w-12 h-12" />
                    <h1 className="font-['Poppins'] font-semibold text-lg xl:text-[30px] pb-2 lg:pb-4">
                        Submit your Application
                    </h1>
                    <p className="text-sm sm:text-base xl:text-[16.7px]">
                        Tell us about yourself and why you want to join Blueprint. We review every application carefully and will invite you for a chat if we see a good fit.
                    </p>
                </div>

                <div className="text-center px-4 mb-8 lg:mb-0">
                    <img src="number3.svg" alt="Step 3" className="block lg:hidden mx-auto mb-4 w-12 h-12" />
                    <h1 className="font-['Poppins'] font-semibold text-lg xl:text-[30px] pb-2 lg:pb-4">
                        Interviews
                    </h1>
                    <p className="text-sm sm:text-base xl:text-[16.7px]">
                        We'll invite you for a casual conversation. This is your chance to ask questions, and we'll also discuss role-specific technical details.
                    </p>
                </div>

                <div className="text-center px-4">
                    <img src="number4.svg" alt="Step 4" className="block lg:hidden mx-auto mb-4 w-12 h-12" />
                    <h1 className="font-['Poppins'] font-semibold text-lg xl:text-[30px] pb-2 lg:pb-4">
                        Final Decision
                    </h1>
                    <p className="text-sm sm:text-base xl:text-[16.7px]">
                        We'll notify you of our decision soon after. If selected, please confirm quickly, and we'll guide you through the onboarding process.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AppCard;
