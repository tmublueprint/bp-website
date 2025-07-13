interface FaceCircleProps {
    width?: string | number; // e.g. "300px" or 300
}

function FaceCircle({ width = "100%" }: FaceCircleProps) {
    return (
        <img src="face-circle.svg" alt="face-circle" style={{ width }} className=" h-100% w-100% max-w-[480px] max-h-[540px]"/>
    );
}

export default FaceCircle;
