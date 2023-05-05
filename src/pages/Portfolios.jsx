import React from "react";
import "./portfolio.styles.scss"
import "../components/carousel.style.scss"
import contents from "../utils/portfolioText.js"
import MyCarousel from "../components/MyCarousel.jsx";

export default () => {

    return <div className={"portfolio"}>
        <h1 className={"portfolio-title"}>Portfolio</h1>
        {contents.map(content => {
                return <div key={content.id} className='portfolio-container'>
                    <div className="portfolio-carousel-box">
                        <MyCarousel contents={content.images}/>
                    </div>
                    <div className="portfolio-carousel-text">
                        <p className="portfolio-carousel-text_description">
                            {content.text}
                        </p>
                        <div className="portfolio-carousel-text_link">
                            <img className={"portfolio-carousel-text_img"} src={content.img_git_src}
                                 alt={content.img_git_alt}/>
                            <a href={content.a_git_href}>{content.a_git_text}</a>
                        </div>
                        <div className="portfolio-carousel-text_link">
                            <img className={"portfolio-carousel-text_img"} src={content.img_web_src}
                                 alt={content.img_web_alt}/>
                            <a href={content.a_web_href}>{content.a_web_text}</a>
                        </div>
                    </div>
                </div>
            }
        )}
    </div>
}