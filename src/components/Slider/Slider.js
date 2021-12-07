import React,{useState} from "react"
import "./Slider.css"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import{slides}from "../../data";







const Slider=()=>{

const[SlideIndex,setSlideIndex]=useState(0);

const handleClick=(direction)=>{
if(direction==="left"){
    setSlideIndex(SlideIndex>0?SlideIndex-1:2)
}else{
    setSlideIndex(SlideIndex<2?SlideIndex+1:0)
}
}
    return(



        <div className="slider-wrapper">
            <div className="arrow-right" onClick={()=>handleClick("right")}>
   <ArrowRightOutlinedIcon />
   
    </div>
    {
    slides.map(slide=>{
        return(
        <div className="slide" style={{backgroundColor:slide.bg , transform:`translateX(${SlideIndex*-100}vw)`}}>

            {console.log(slide.bg)}
    
    <div className="slide-image">
        <img src={slide.img} />
        

    </div>
    <div className="slide-content">
    <h2>{slide.title}</h2>
        <p>{slide.desc}</p>
        <button className="btn-slide" >Buy Now</button>
    </div>

</div>
        )
        
    })
}



<div className="arrow-left"  onClick={()=>handleClick("left")}>
<ArrowLeftOutlinedIcon />
</div>
        </div>

        
    )
}
export default Slider;
