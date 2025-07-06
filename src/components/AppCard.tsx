function AppCard() {

    return (
        <div>
            <div>image 1</div>
            <div className="flex text-center max-w-[1056px] gap-6">
                <div>
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-[20.7px] pb-4">Do your Research</h1>
                    </div>
                    <div>
                        Explore our ongoing projects and connect with us on our Instagram, LinkedIn and other socials to stay
                        up to date.
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-[20.7px] pb-4">Submit your Application</h1>
                    </div>
                    <div>Tell us about yourself and why you want to join Blueprint. We review every application carefully and
                        will invite you for a chat if we see a good fit.
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-[20.7px] pb-4">Interviews</h1>
                    </div>
                    <div>We'll invite you for a casual conversation. This is your chance to ask questions, and we'll also discuss
                        role-specific technical details.
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="font-['Poppins'] font-semibold text-[20.7px] pb-4">Final Decision</h1>
                    </div>
                    <div>We'll notify you of our decision soon after. If selected, please confirm quickly, and we'll guide you
                        through the onboarding process.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppCard;