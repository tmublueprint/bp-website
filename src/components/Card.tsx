function Card({ 
  children, 
  margin = "mx-6 my-4",
  fullWidth = false,
  className = "",
  style = {}
}: { 
  children?: React.ReactNode;
  margin?: string;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const widthClasses = fullWidth ? "w-full" : ""; // optional fallback
  return (
    <div
      className={`
        ${widthClasses}
        ${margin}
        bg-[#E6F3FF]
        rounded-[24px]
        overflow-hidden
        flex
        items-start
        justify-start
        sm:w-[70vw]
        md:w-[60vw]
        lg:w-[356.7px]
        sm:h-[50vw]
        md:h-[45vw]
        lg:h-[309px]
        flex-shrink-0
        shadow-sm
        ${className}`
      }
      style={{
          ...style
      }}
    >
      {children}
    </div>
  );
}
  
export default Card;
