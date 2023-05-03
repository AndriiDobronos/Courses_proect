import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.scss"

export default class CarouselObvilink extends Component {
    state = {
        activeSlideIndex: 0,
        contents: [
            {id: '1', src: '../static/Obvilink/Obvilink1p.png', alt:"Web-page"},
            {id: '2', src: '../static/Obvilink/Obvilink2p.png', alt:"Web-page"},
            {id: '3', src: '../static/Obvilink/Obvilink3p.png', alt:"Web-page"},
            {id: '4', src: '../static/Obvilink/Obvilink4p.png', alt:"Web-page"},
            {id: '5', src: '../static/Obvilink/Obvilink5p.png', alt:"Web-page"},
            {id: '6', src: '../static/Obvilink/Obvilink6p.png', alt:"Web-page"},
            {id: '7', src: '../static/Obvilink/Obvilink7p.png', alt:"Web-page"},
            {id: '8', src: '../static/Obvilink/Obvilink8p.png', alt:"Web-page"},
        ]
    };

    setActiveSlideIndex = (newActiveSlideIndex) => {
        this.setState({
            activeSlideIndex: newActiveSlideIndex,
        });
    };

    render() {
        return (
            <Carousel
                activeSlideIndex={this.state.activeSlideIndex}
                onRequestChange={this.setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
            >
                {this.state.contents.map(content =>{
                    return  <div key={content.id} className='content'>
                        <img className={"content-img_obvilink"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );
    }
}