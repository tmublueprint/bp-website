function AppCard() {

    return (
        <div className="mb-12 sm:mb-[134.1px]">
            <h1 className="font-['Poppins'] font-bold text-[55.3px] appheader-small mb-6 sm:mb-[57.9px] text-[#333333]">
                Application Process
            </h1>
            <div className="hidden sm:flex justify-center p-9">
                <img className="xl:w-[1185px] mx-auto num-list-small" src="number-list-h.svg" />
            </div>
            <div className="flex flex-col sm:flex-row items-center max-w-full sm:max-w-[1056px] xl:max-w-[1280px] gap-6 xl:gap-35 mx-auto">
                <div className="text-center px-2 sm:px-0 mb-8 sm:mb-0">
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-lg appheader-small-body-h1 xl:text-[30px] pb-2 sm:pb-4">
                            Do your Research
                        </h1>
                    </div>
                    <div className="text-sm sm:text-base xl:text-[16.7px]">
                        Explore our ongoing projects and connect with us on our Instagram, LinkedIn and other socials to stay up to date.
                    </div>
                </div>
                <div className="text-center px-2 sm:px-0 mb-8 sm:mb-0">
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-lg appheader-small-body-h1 xl:text-[30px] pb-2 sm:pb-4">
                            Submit your Application
                        </h1>
                    </div>
                    <div className="text-sm sm:text-base xl:text-[16.7px]">
                        Tell us about yourself and why you want to join Blueprint. We review every application carefully and will invite you for a chat if we see a good fit.
                    </div>
                </div>
                <div className="text-center px-2 sm:px-0 mb-8 sm:mb-0">
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-lg appheader-small-body-h1 xl:text-[30px] pb-2 sm:pb-4">
                            Interviews
                        </h1>
                    </div>
                    <div className="text-sm sm:text-base xl:text-[16.7px]">
                        We'll invite you for a casual conversation. This is your chance to ask questions, and we'll also discuss role-specific technical details.
                    </div>
                </div>
                <div className="text-center px-2 sm:px-0">
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-lg appheader-small-body-h1 xl:text-[30px] pb-2 sm:pb-4">
                            Final Decision
                        </h1>
                    </div>
                    <div className="text-sm sm:text-base xl:text-[16.7px]">
                        We'll notify you of our decision soon after. If selected, please confirm quickly, and we'll guide you through the onboarding process.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppCard;