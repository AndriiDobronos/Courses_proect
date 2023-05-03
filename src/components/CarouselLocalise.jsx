import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.scss"

export default class CarouselLocalise extends Component {
    state = {
        activeSlideIndex: 0,
        contents: [
            {id: '1', src: '../static/Localise/Localise1p.png', alt: "Web-page"},
            {id: '2', src: '../static/Localise/Localise2p.png', alt: "Web-page"},
            {id: '3', src: '../static/Localise/Localise3p.png', alt: "Web-page"},
            {id: '4', src: '../static/Localise/Localise4p.png', alt: "Web-page"},
            {id: '5', src: '../static/Localise/Localise5p.png', alt: "Web-page"},
            {id: '6', src: '../static/Localise/Localise6p.png', alt: "Web-page"},
            {id: '7', src: '../static/Localise/Localise7p.png', alt: "Web-page"},
            {id: '8', src: '../static/Localise/Localise8p.png', alt: "Web-page"},
            {id: '9', src: '../static/Localise/Localise9p.png', alt: "Web-page"},
            {id: '10', src: '../static/Localise/Localise10p.png', alt: "Web-page"},
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
                {this.state.contents.map(content => {
                        return <div key={content.id} className='content'>
                            <img className={"content-img"} src={content.src} alt={content.alt}/>
                        </div>
                    }
                )}
            </Carousel>
        );
    }
}