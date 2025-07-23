import { useState } from "react";


interface QCardProps {
    question?: string;
    answer?: string;
    isLast?: boolean;
}

function QCard({ question, answer, isLast = false }: QCardProps) {
    const [open, setOpen] = useState(false);

    function onOpen(openState : boolean){
        setOpen(openState);
    }

    return (
        <div className=" w-full">
            <div className="flex justify-between">
                <h1 className="font-['Poppins'] font-bold text-[23.3px] text-[#333333]">{question}</h1>
                {!open && 
                (<button onClick={() => onOpen(true)}>
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4864 42.6066C33.1028 42.6066 42.5198 33.1898 42.5198 21.5734C42.5198 9.95702 33.1028 0.540039 21.4864 0.540039C9.87002 0.540039 0.453125 9.95702 0.453125 21.5734C0.453125 33.1898 9.87002 42.6066 21.4864 42.6066Z" stroke="#333333" stroke-width="0.666667" stroke-miterlimit="10"/>
                    <path d="M21.5933 15.22V27.9332" stroke="#0C78EC" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M15.1265 21.5801H27.8465" stroke="#0C78EC" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                </button>)}
            </div>
            {open && (<div className="flex justify-between mt-4">
                <p className="font-['Poppins']">{answer}</p>
                <button className="btn btn-blue" onClick={() => onOpen(false)}>
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5397 42.5799C33.1561 42.5799 42.573 33.1629 42.573 21.5465C42.573 9.93016 33.1561 0.513184 21.5397 0.513184C9.92332 0.513184 0.506348 9.93016 0.506348 21.5465C0.506348 33.1629 9.92332 42.5799 21.5397 42.5799Z" fill="url(#paint0_linear_83_21)"/>
                    <path d="M15.1797 21.5532H27.8997" stroke="white" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_83_21" x1="0.499681" y1="21.5465" x2="42.573" y2="21.5465" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#94C9FF"/>
                    <stop offset="0.13" stop-color="#8BC3FE"/>
                    <stop offset="0.33" stop-color="#71B4FA"/>
                    <stop offset="0.6" stop-color="#489CF4"/>
                    <stop offset="0.91" stop-color="#107AED"/>
                    <stop offset="0.93" stop-color="#0C78EC"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </button>
            </div>
            )}
            {!isLast && <hr className="w-full h-[0.5px] bg-[#b3b3b3] border-none my-6 mx-0" />}
        </div>
    )
}

export default QCard;