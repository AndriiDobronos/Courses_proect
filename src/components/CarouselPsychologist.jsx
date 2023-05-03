import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.scss"

export default class CarouselPsychologist extends Component {
    state = {
        activeSlideIndex: 0,
        contents: [
            {id: '1', src: '../static/Psychologist/Marin1p.png', alt:"Web-page"},
            {id: '2', src: '../static/Psychologist/Marin2p.png', alt:"Web-page"},
            {id: '3', src: '../static/Psychologist/Marin3p.png', alt:"Web-page"},
            {id: '4', src: '../static/Psychologist/Marin4p.png', alt:"Web-page"},
            {id: '5', src: '../static/Psychologist/Marin5p.png', alt:"Web-page"},
            {id: '6', src: '../static/Psychologist/Marin6p.png', alt:"Web-page"},
            {id: '7', src: '../static/Psychologist/Marin7p.png', alt:"Web-page"},
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
                {this.state.contents.map(content =>{
                    return  <div key={content.id} className='content'>
                        <img className={"content-img"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );
    }
}