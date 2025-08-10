import QCard from "./QuestionCard";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqData?: FAQItem[];
  className?: string;
}

function FAQ({ 
  title = "FAQs",
  faqData = [
    {
      question: "01. Who can apply?",
      answer: "Any TMU student, regardless of year, program, or experience level."
    },
    {
      question: "02. Do I need prior experience?",
      answer: "No prior experience required! We welcome beginners and provide mentorship."
    },
    {
      question: "03. What roles are available?",
      answer: "We're looking for Project Leads and Developers to work on nonprofit projects."
    },
    {
      question: "04. What's the time commitment?",
      answer: "Expect to dedicate a few hours per week to meetings, development, and collaboration."
    },
    {
      question: "05. Can I apply if I'm already in a co-op or internship?",
      answer: "Yes! Many students balance Blueprint with work or school."
    }
  ],
  className = ""
}: FAQProps) {    
    return (
        <div className={`mb-[120.4px] ${className}`}>
            <h1 className="font-['Poppins'] font-bold text-[55.3px] text-center text-[#333333] mb-[62.2px] xl:text-[70px]">
              {title}
            </h1>
            <div className="flex flex-col gap-6 mt-[11px] items-center">
                {faqData.map((faq, index) => (
                    <QCard 
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isLast={index === faqData.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQ;