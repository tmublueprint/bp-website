function Card({ children }: { children: React.ReactNode }) {
    return (
      <div
        className=" card
        w-[80vw] max-w-[356px]
        h-[60hw] max-h-[309px]
        mx-6 my-4
        bg-[#333]
        opacity-10
        rounded-2xl
        overflow-hidden
        flex
        items-center
        justify-center
        sm:w-[70vw]
        md:w-[60vw]
        lg:w-[356px]
        sm:h-[50vw]
        md:h-[45vw]
        lg:h-[309px]
        flex-shrink-0
        "
      >
        {children}
      </div>
    );
  }
  
  export default Card;
  