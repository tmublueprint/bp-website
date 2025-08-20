import { FiArrowUpRight } from "react-icons/fi";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

type GenericButtonProps = {
    label: string;
    className?: string;
    style?: CSSProperties;
    to?: string;
    onClick?: () => void;
};

function GenericButton({ label, className = "", style = {}, to, onClick }: GenericButtonProps) {
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
    
    const buttonContent = (
        <>
            {label}
            <FiArrowUpRight size={20} />
        </>
    );

    if (to) {
        return (
            <Link 
                to={to} 
                className={`${defaultClass}\n${className}`} 
                style={{...style, textDecoration: 'none'}}
            >
                {buttonContent}
            </Link>
        );
    }
    
    return (
        <button
            className={`${defaultClass}\n${className}`}
            style={style}
            onClick={onClick}
        >
            {buttonContent}
        </button>
    );
}

export default GenericButton;