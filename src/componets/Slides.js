import React from "react";
import "./Slider.css";

const sliderInfo = [
    
    {

        src: "https://images.pexels.com/photos/2528116/pexels-photo-2528116.jpeg?auto=compress&cs=tinysrgb&dpr=9&h=120&w=880",
        alt: "proyecto 1",
        desc: "proyecto 1",
    },

    {

        src: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=9&h=120&w=880",
        alt: "proyecto 2",
        desc: "proyecto 2",
    },

    {

        src: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=9&h=120&w=880",
        alt: "proyecto 3",
        desc: "proyecto 3",
    },
]

const slides = sliderInfo.map(slide=>(
    <div className="slide-contanier"> 
    <img src={slide.src} alt={slide.alt}/>
    <div className="slide-desc">
        <span>{slide.desc}</span>
    </div>
    </div>
    ));

    export default slides;

