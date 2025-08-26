import Card from "../Card"
import laptop from '../../../src/assets/images/laptop.svg'
import team from '../../../src/assets/images/team.svg'
import gear from '../../../src/assets/images/gear.svg'
import paint from '../../../src/assets/images/paint.svg'

function ExpertCard() {

  const traits = [
    {
      icon: team,
      title: "Our Team",
      description: (
        <span className="">
          At Blueprint, we are proud to have a team of highly motivated and skilled students, each bringing specialized expertise to the table. With a commitment to delivering high-quality solutions, our team works closely with nonprofits to create impactful technology that drives success.
        </span>
      ),
    },
    {
      icon: laptop,
      title: "Technical Expertise",
      description:
        <span>
            Our developers are well-versed in the latest technologies, including web and mobile development, data management systems, and software engineering. We work collaboratively to design and implement custom solutions that are robust, scalable, and specifically tailored to the unique challenges of nonprofit organizations.
        </span>
    },
    {
      icon: paint,
      title: "Creative Design",
      description: (
        <span>
          Our design team combines deep knowledge of user interface (UI) and user experience (UX) design to create visually compelling and easy-to-use solutions. By focusing on accessibility and functionality, we ensure that every project we deliver is both engaging and efficient for end users.
        </span>
      ),
    },
    {
      icon: gear,
      title: "Project Management",
      description: (
        <span>
          Our experienced project managers ensure seamless execution of each project, overseeing everything from planning to delivery. They maintain clear communication with nonprofit partners, manage timelines and resources, and ensure that every project is aligned with the nonprofit’s objectives and delivered on schedule.
        </span>
      ),
    },
  ]

  return (
    <div className="mb-[112.3px]">
      <h1 className="font-['Poppins'] font-medium text-[32px] sm:text-[55.3px] mb-8 sm:mb-12 text-[#333]">Our Expertise</h1>
      <div className="flex flex-col w-full gap-4 sm:gap-6">
        {traits.map((trait, index) => (
          <Card
            key={index}
            fullWidth={true}
            margin=""
            style={{ 
              backgroundColor: "rgba(199, 224, 251, 0.7)"
            }}
            className="
              w-full max-w-[98vw] sm:max-w-none
              px-4 py-4
              sm:pl-[48px] sm:pr-[63.6px] sm:pb-[35px] sm:pt-[38px]
              expertcard-mobile
            "
          >
            <div className="flex flex-col">
              <div className="flex gap-3 sm:gap-5 items-center">
                <img src={trait.icon || "/placeholder.svg"} alt={trait.title} className="w-9 h-9 sm:w-12 sm:h-12" />
                <h2 className="font-['Poppins'] font-bold expertcard-title text-[#333] leading-tight">{trait.title}</h2>
              </div>
              <div className="font-['Poppins'] expertcard-desc text-[#333] text-left mt-2 sm:mt-[12.6px]">
                {trait.description}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ExpertCard