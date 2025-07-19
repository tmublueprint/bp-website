import { FiArrowUpRight } from "react-icons/fi";

type GenericButtonProps = {
    label: string;
  };

function GenericButton({ label }: GenericButtonProps) {
    return (
        <button
            className="
                w-40
                h-10
                flex-grow-0
                mt-1
                px-2
                pt-1
                pb-1
                bg-[#0c78ec]
                text-white
                rounded
                text-xl
                md:w-44
                mx-auto
                transition
                hover:bg-blue-600
                rounded-full
            "
        >
            {label}
            <FiArrowUpRight size={25} className="align-middle inline-block relative top-[-2px] relative left-[5px]" />
        </button>
    );
}

export default GenericButton;
