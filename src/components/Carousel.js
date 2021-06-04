// import React, { Component } from "react";
// import Slider from "react-slick";
//
// const SimpleSlider = () => {
//
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//
// }
//
// export default SimpleSlider;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {

        return (
            <Carousel>
                <div>
                    <img src="https://www.esaote.com/uploads/pics/esaote-slider-home-img04-new.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://ak.picdn.net/shutterstock/videos/1021233307/thumb/9.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkDBWVoVWDK-OSIJG7dsVHjE60Hlv-YDM9pnzB1lZG-yA2pjXury7HK44kNf5cxinnx0&usqp=CAU" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );

};
export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>