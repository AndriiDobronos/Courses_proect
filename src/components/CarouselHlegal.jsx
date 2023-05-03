import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.scss"

export default class CarouselHlegal extends Component {
    state = {
        activeSlideIndex: 0,
        contents: [
            {id: '1', src: '../static/hlegal/hlegal1p.png', alt:"Web-page"},
            {id: '2', src: '../static/hlegal/hlegal2p.png', alt:"Web-page"},
            {id: '3', src: '../static/hlegal/hlegal3p.png', alt:"Web-page"},
            {id: '4', src: '../static/hlegal/hlegal4p.png', alt:"Web-page"},
            {id: '5', src: '../static/hlegal/hlegal5p.png', alt:"Web-page"},
            {id: '6', src: '../static/hlegal/hlegal6p.png', alt:"Web-page"},
            {id: '7', src: '../static/hlegal/hlegal7p.png', alt:"Web-page"},
            {id: '8', src: '../static/hlegal/hlegal8p.png', alt:"Web-page"},
        ],
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
                {this.state.contents.map(content => {
                    return  <div key={content.id} className='content'>
                        <img className={"content-img"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );
    }
}