import ListNumbers from '../../assets/images/list-numbers.svg';
import '../../assets/css/DevelopmentCard.css';
import '../../index.css';

function DevelopmentCard() {
    return (
        <div className="w-full px-4 sm:px-8 max-w-screen overflow-hidden">
            <div id="devCard-container" className='mb-[82.1px]'>
                <div id="devCard-title" className='text-[#333]'>
                    <p>Product</p>
                    <p>Development</p>
                    <p>Process</p>
                </div>
                <div id="devCard-body">
                    <img src={ListNumbers} alt="list of numbers" id="devCard-list-numbers" />
                    <ul id="devCard-text" className='text-[#333]'>
                        <li>
                            <p className="devCard-body-title">Discovery & Planning</p>
                            <p className="devCard-body-text">We start by understanding the nonprofit’s challenges and goals. Through research and discussions, we define the project scope, outline key requirements, and ensure our solution aligns with their mission.</p>
                        </li>
                        <li>
                            <p className="devCard-body-title">Design & Prototyping</p>
                            <p className="devCard-body-text">Next, our design team creates wireframes and prototypes to map out the user experience. We gather feedback, refine the design, and ensure accessibility and usability are prioritized before development begins.</p>
                        </li>
                        <li>
                            <p className="devCard-body-title">Development & Implementation</p>
                            <p className="devCard-body-text">Our developers bring the vision to life by building the product based on the approved designs. We follow best practices in coding, ensuring the solution is scalable, secure, and optimized for performance.</p>
                        </li>
                        <li>
                            <p className="devCard-body-title">Testing & Quality Assurance</p>
                            <p className="devCard-body-text">Before launch, we conduct thorough testing to identify and fix any issues. We gather user feedback, make final adjustments, and ensure the product is reliable, accessible, and ready for real-world use.</p>
                        </li>
                        <li>
                            <p className="devCard-body-title">Deployment & Handoff</p>
                            <p className="devCard-body-text">Once the product is complete, we support the nonprofit with deployment and onboarding. We ensure a smooth transition by providing documentation and training.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DevelopmentCard;