import React, { Component } from 'react';
import Slider from 'react-slick';


import "../assets/css/sliderstyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
        name: "Image 1",
        url: "../assets/img/slide1.jpg"
    },
    {
        name: "Image 2",
        url: "../assets/img/slide2.jpg"
    },
    {
        name: "Image 3",
        url: "../assets/img/slide3.jpg"
    },
    {
        name: "Image 4",
        url: "../assets/img/slide4.jpg"
    }
]

class SliderItem extends Component {
    render() {

        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            width:"600px",
            height:"400px",
            className: "slides"
        };
        if (this.props.active == "y")
            return (
                <section id="section-resort-list">
                <div>
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        {images.map((image) => {
                            return (
                                <div>
                                    <img width="100%" height="100%" src={"../assests/img/slide2.jpg"} />

                                </div>

                            )
                        }
                        )
                        }
                    </Slider>
                    <h2> Single Item Ends</h2>
                </div>
                </section>

            )
        return (
            <div>


            </div>
        )
    }

}

export default SliderItem;

/*

 <div>

                    <Slider {...settings}>

                    </Slider>
                </div>
*/