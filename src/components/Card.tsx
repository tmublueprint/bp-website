function Card({ 
  children, 
  width = 356, 
  height = 309 
}: { 
  children?: React.ReactNode;
  width?: number;
  height?: number;
}) {
    return (
      <div
        className="
        w-[80vw] 
        h-[60vw] 
        mx-6 my-4
        bg-[#E6F3FF]
        rounded-[24px]
        overflow-hidden
        flex
        items-start
        justify-start
        sm:w-[70vw]
        md:w-[60vw]
        sm:h-[50vw]
        md:h-[45vw]
        lg:h-[309px]
        flex-shrink-0
        shadow-sm
        "
        style={{
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
        }}
      >
        {children}
      </div>
    );
  }
  
  export default Card;