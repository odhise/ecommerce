import React from "react"
import "./Slider.css"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import{slides}from "../../data";





const handleClick=()=>{
    alert("Hello there! ")

}
const slider=()=>{
    return(



        <div className="slider-wrapper">
            <div className="arrow-right" onClick={handleClick}>
   <ArrowRightOutlinedIcon />
   
    </div>
    {
    slides.map(slide=>{
        return(
        <div className="slide">
    
    <div className="slide-image">
        <img src={slide.img} />
        

    </div>
    <div className="slide-content">
    <h2>{slide.title}</h2>
        <p>{slide.desc}</p>
        <button className="btn">Buy Now</button>
    </div>

</div>
        )
        
    })
}



<div className="arrow-left" onClick={handleClick}>
<ArrowLeftOutlinedIcon />
</div>
        </div>

        
    )
}
export default slider;
