import React  from "react";
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from './img/slider/1.jpg'
import slider2 from './img/slider/2.jpg'
import slider3 from './img/slider/3.jpg'

const MySlider = () => {
    const settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        arrows: false,

        autoplaySpeed: 2000,

        // slidesToShow: 1,
        // slidesToScroll: 1
    }
const SliderImgStyles = {
        width: '100%',
}

    return (
        <div >
            {/*<h2> Single Item</h2>*/}
            <Slider {...settings}>
                <div >
                    <img src={slider1} style={SliderImgStyles}/>
                </div>
                <div>
                    <img src={slider2} style={SliderImgStyles}/>
                </div>
                <div>
                    <img src={slider3} style={SliderImgStyles}/>
                </div>

            </Slider>
        </div>

    );
}

export default MySlider;