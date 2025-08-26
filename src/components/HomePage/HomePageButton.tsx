import NorthEastArrow from "/src/assets/images/north-east-arrow.svg";
import { CSSProperties } from "react";
import '/src/assets/css/style.css';

function HomePageButton(
{   
    link = "", 
    text = "",
    arrowOnly = false,
    arrowSize = "16px",
    style = {},
    
}: 
{ 
    link?: string; 
    text?: string;
    arrowOnly?: boolean;
    arrowSize?: string;
    style?: CSSProperties;
}) {
    const arrowImg = (
        <img
            src={NorthEastArrow}
            alt="arrow"
            className="north-east-arrow"
            style={{
                margin: arrowOnly ? "auto" : undefined,
                width: arrowSize,
                height: arrowSize
            }}
        />
    );

    const buttonText = !arrowOnly ? <p id="homePage-link-text">{text}</p> : null;

    return (
        <div>
            <a id="homePage-link" href={link} style={style}>
                {buttonText}
                {arrowImg}
            </a>
        </div>
    );
}
export default HomePageButton;