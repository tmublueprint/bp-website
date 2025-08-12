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
        shadow-sm
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;