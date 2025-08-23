import DevelopmentCard from "../../components/NpoPage/DevelopmentCard";
import NpoHeader from "../../components/NpoPage/NpoHeader";
import ExpertCard from "../../components/NpoPage/ExpertCard";
import FAQ from "../../components/StudentPage/FAQ";

const customFAQs = [
  {
    question: "01. What kind of projects does Blueprint take on?",
    answer: "We work on a variety of tech solutions tailored to the needs of nonprofits, ranging from web applications, mobile and others."
  },
  {
    question: "02. How much does it cost to work with Blueprint?",
    answer: "Free, we provide our services at no cost to nonprofits!"
  },
  {
    question: "03. How long does a project typically take?",
    answer: "Depending on the scope, projects are in 4-month or 8-month cycles matching the academic terms of our school."
  },
  {
    question: "04. How does Blueprint select which nonprofits to work with?",
    answer: "We have our own project selection criteria and selection process, but we care about how much impact a project can make and the feasibility of completing it within our timelines."
  },
  {
    question: "05. Can nonprofits request changes after the project is completed?",
    answer: "We work on finishing only within the project timeline and handover the project to the nonprofit. We do not provide ongoing maintenance, but we ensure proper documentation is provided for future reference."
  }
];

<FAQ title="About Us" faqData={customFAQs} />

function NpoPage() {
    return (
      <div className="Vector-bg-npo">
        <div className='flex flex-col ml-[132.7px] mr-[155.3px] small-screen-comp'>
            <NpoHeader />
            <ExpertCard />
            <DevelopmentCard/>
            <FAQ faqData={customFAQs}/>
        </div>
      </div>
    )
}

export default NpoPage;