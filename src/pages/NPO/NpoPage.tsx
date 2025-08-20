import DevelopmentCard from "../../components/NpoPage/DevelopmentCard";
import NpoHeader from "../../components/NpoPage/NpoHeader";
import ExpertCard from "../../components/NpoPage/ExpertCard";
import FAQ from "../../components/StudentPage/FAQ";

const customFAQs = [
  {
    question: "01. What kind of projects does Blueprint take on?",
    answer: "Any TMU student, regardless of year, program, or experience level."
  },
  {
    question: "02. How much does it cost to work with Blueprint?",
    answer: "Free, we provide our services at no cost to nonprofits."
  },
  {
    question: "03. How long does a project typically take?",
    answer: "We’re looking for Project Leads and Developers to work on nonprofit projects."
  },
  {
    question: "04. How does Blueprint select which nonprofits to work with?",
    answer: "Expect to dedicate a few hours per week to meetings, development, and collaboration."
  },
  {
    question: "05. Can nonprofits request changes after the project is completed?",
    answer: "Yes! Many students balance Blueprint with work or school."
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