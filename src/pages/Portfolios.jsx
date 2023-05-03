import React, {useState} from "react";
import "./portfolio.styles.scss"
import "../components/carousel.style.scss"
import contents from "../utils/portfolioText.js"
import Carousel from "react-simply-carousel";

export default () => {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);
    const [activeSlideIndex3, setActiveSlideIndex3] = useState(0);
    const [activeSlideIndex4, setActiveSlideIndex4] = useState(0);
    const [activeSlideIndex5, setActiveSlideIndex5] = useState(0);


    return <div className={"portfolio"}>
        <h1 className={"portfolio-title"}>Portfolio</h1>
        {contents.map(content => {
                return <div key={content.id} className='portfolio-container'>
                    <div className="portfolio-carousel-box">

                        <Carousel
                            activeSlideIndex={activeSlideIndex5}
                            onRequestChange={setActiveSlideIndex5}
                            itemsToShow={1}
                            itemsToScroll={1}
                        >
                            {content.images.map(content =>{
                                return  <div key={content.id} className='content'>
                                    <img className={content.class} src={content.src} alt={content.alt}/>
                                </div>}
                            )}
                        </Carousel>

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