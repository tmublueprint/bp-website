function Card({ 
  children, 
  width = 356, 
  height = 309,
  margin = "mx-6 my-4",
  fullWidth = false,
  className = "",
  style = {}
}: { 
  children?: React.ReactNode;
  width?: number;
  height?: number | "auto";
  margin?: string;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
    const widthClasses = fullWidth 
      ? "w-full" 
      : "w-[80vw] sm:w-[70vw] md:w-[60vw]";
    
    const heightClasses = height === "auto" 
      ? "h-auto" 
      : "h-[60vw] sm:h-[50vw] md:h-[45vw]";
    
    return (
      <div
        className={`
        ${widthClasses}
        ${heightClasses}
        ${margin}
        bg-[#E6F3FF]
        rounded-[24px]
        overflow-hidden
        flex
        items-center
        justify-center
        shadow-sm
        ${className}
        `}
        style={{
          maxWidth: fullWidth ? undefined : `${width}px`,
          maxHeight: height === "auto" ? undefined : `${height}px`,
          ...style
        }}
      >
        {children}
      </div>
    );
}

export default Card;