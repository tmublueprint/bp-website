import NorthEastArrow from '/public/north-east-arrow.svg';
import { CSSProperties } from "react";

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
            <link href="/public/HomePageButton/style.css" rel="stylesheet" />
            <a id="homePage-link" href={link} style={style}>
                {buttonText}
                {arrowImg}
            </a>
        </div>
    );
}
export default HomePageButton;