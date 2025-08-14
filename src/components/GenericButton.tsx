import { FiArrowUpRight } from "react-icons/fi";
import { CSSProperties } from "react";

type GenericButtonProps = {
    label: string;
    className?: string;
    style?: CSSProperties;
};

function GenericButton({ label, className = "", style = {} }: GenericButtonProps) {
    const defaultClass = `      
                min-w-40
                h-10
                flex
                items-center
                justify-center
                gap-2
                flex-grow-0
                mt-1
                px-4
                pt-1
                pb-1
                bg-[#0c78ec]
                text-white
                rounded-full
                text-xl
                md:min-w-44
                mx-auto
                transition
                hover:bg-blue-600`;
    
    return (
        <button
            className={`${defaultClass}\n${className}`}
            style={style}
        >
            {label}
            <FiArrowUpRight size={20} />
        </button>
    );
}

export default GenericButton;