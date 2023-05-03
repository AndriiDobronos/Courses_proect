import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.scss"

export default class CarouselAustera extends Component {
    state = {
        activeSlideIndex: 0,
        contents: [
            {id: '1', src: '../static/Austera/Austera1p.png', alt:"Web-page"},
            {id: '2', src: '../static/Austera/Austera2p.png', alt:"Web-page"},
            {id: '3', src: '../static/Austera/Austera3p.png', alt:"Web-page"},
            {id: '4', src: '../static/Austera/Austera4p.png', alt:"Web-page"},
            {id: '5', src: '../static/Austera/Austera5p.png', alt:"Web-page"},
            {id: '6', src: '../static/Austera/Austera6p.png', alt:"Web-page"},
            {id: '7', src: '../static/Austera/Austera7p.png', alt:"Web-page"},
            {id: '8', src: '../static/Austera/Austera8p.png', alt:"Web-page"}
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
                        <img className={"content-img"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );
    }
}