import Card from "../Card"
import heart from '../../../public/heart.svg'
import checkmark from '../../../public/checkmark.svg'
import laptop from '../../../public/laptop.svg'
import team from '../../../public/team.svg'

function TraitCard() {

  const traits = [
    {
      icon: heart,
      title: "Passion for the Mission",
      description: (
        <>
          A strong passion for using technology to create meaningful change and support nonprofits. We look for applicants who{' '}
          <span className="bg-blue-200 px-1 rounded">genuinely care about social impact</span>{' '}
          and want to{' '}
          <span className="bg-blue-200 px-1 rounded">contribute to something bigger</span>.
        </>
      ),
    },
    {
      icon: laptop,
      title: "Technical Skills",
      description:
        <>
            The{' '}
            <span className="bg-blue-200 px-1 rounded">necessary experience and knowledge for the role,</span>{' '}
            whether it's software development, project management, or design. While expertise is great, we also value
            a willingness to learn and grow.
        </>
    },
    {
      icon: team,
      title: "Teamwork",
      description: (
        <>
          The ability to{' '}
          <span className="bg-blue-200 px-1 rounded">collaborate effectively,
          communicate clearly, and support your team.</span>{' '}
          We want people who are dependable, take responsibility for their work, and contribute to a positive team environment.
        </>
      ),
    },
    {
      icon: checkmark,
      title: "Initiative",
      description: (
        <>
          A{' '}
          <span className="bg-blue-200 px-1 rounded">proactive mindset
          and a strong work ethic.</span>{' '} 
          We look for students who take ownership of tasks, push themselves to improve, and aren't afraid to step up when challenges arise.
        </>
      ),
    },
  ]

  return (
    <div className="mb-[112.3px]">
      <h1 className="font-['Poppins'] font-bold text-[55.3px] text-center mb-12 text-[#333333]">What We Look For</h1>
      <div className="flex flex-wrap justify-center gap-1 xl:max-w-[1500px] xl:mx-auto">
        {traits.map((trait, index) => (
          <Card
            key={index}
            className="w-[320px] h-[240px] md:w-[486px] md:h-[320px] xl:h-[380px] xl:w-[540px] 2xl:h-[380px] 2xl:w-[600px]"
          >
            <div className="pl-[54px] pr-8 py-8 h-full flex flex-col">
              <img src={trait.icon} alt={trait.title} className="w-12 h-12 mb-1 xl:w-16 xl:h-16" />

              <h2 className="font-['Poppins'] font-bold text-[28px] text-[#333] xl:text-[33px] mb-4 leading-tight">
                {trait.title}
              </h2>

              <div className="font-['Poppins'] text-[16px] xl:text-[19px] text-[#666] leading-relaxed flex-grow pr-4">
                {trait.description}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TraitCard