import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactPage() {
    return (
        <div className='ml-[132.7px] mr-[155.3px] small-screen-comp'>
                <h1 className="font-['Poppins'] font-bold text-[55.3px] text-[#333] mb-[52.6px] mt-[102px]">Contact Us</h1>
                <div>
                    <h2 className="font-['Poppins'] font-bold text-[35px] text-[#333] mb-[32px]">Email us</h2>
                    <span className="font-['Poppins'] text-[20px] mb-[30px] text-[#333]">Got a question? Our team will get back to you as soon as we can. Reach out for inquiries, nonprofit collaborations, student opportunities,
                         partnership ideas, or if you’re interested in applying for a position.
                    </span>
                    <div className="mb-[101px]">
                        <img />
                        <p>tmublueprint@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-['Poppins'] font-bold text-[35px] text-[#333] mb-[32px]">Follow us</h2>
                    <span className="font-['Poppins'] text-[20px] mb-[30px] text-[#333]">Follow us on Instagram, LinkedIn, YouTube, and GitHub to stay in the loop about new projects, hiring openings, and behind-the-scenes work.
                         See what we’re building, get updates first, and be part of our journey!
                    </span>
                    <div></div>
                </div>
        </div>
    )
}

export default ContactPage;