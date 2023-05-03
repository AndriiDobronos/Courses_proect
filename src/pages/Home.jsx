import React from "react";
import "./home.styles.scss"
import text from "../utils/homeText"

export default () => {
    return   <div className={"home"}>
        <div className={"home-box"}>
            <picture className={"home-box-img"}>
                <source  media="(max-width: 767px)" srcSet="../../static/Logo/photo-me-w.jpg"/>
                    <source  media="(min-width: 1240px)" srcSet="../../static/Logo/photo-me.jpg"/>
                        <img className={"home-box-img"} src="../../static/Logo/photo-me-h.jpg" alt="My Photo"/>
            </picture>
        </div>

        <div className="home-summary">
            <h1 className="home-summary-title">{text.name}</h1>
            <div className="text-wave">
                {text.title.split("").map((symbol,i) => {
                    return <span key={i} style={{animationDelay: i*0.1 +'s'}} >
                        {symbol}
                    </span>
                })}

            </div>
            <p className="home-summary-text">
                {text.summary}
                </p>
        </div>
    </div>
}