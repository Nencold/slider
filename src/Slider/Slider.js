import React, {useEffect, useRef, useState} from "react";
import './Slider.css';

export default function Slider(){
    const sliderRef = useRef();
    const sliderLineRef = useRef();
    const [width, setWidth] = useState();
    const [offset, setOffset] = useState(0);

    let sliderImages = [
        {
            id: 0,
            src: "images/header1440.png",
        },
        {
            id: 1,
            src: "images/header1440.png"
        },
        {
            id: 2,
            src: "images/header1440.png"
        },
        {
            id: 3,
            src: "images/header1440.png"
        },
        {
            id: 4,
            src: "images/header1440.png"
        },
    ]
    
    useEffect(() => {
        setWidth(sliderRef.current.offsetWidth)
        const resizeHandler = () =>{
            let _width = sliderRef.current;
            setWidth(_width.offsetWidth)    
            setOffset(0)
        }
        resizeHandler()
        console.log(sliderImages.length);
        window.addEventListener('resize', resizeHandler)
    },[])

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - width;
            const maxWidth = -(width * sliderImages.length);
            console.log(newOffset)
            if(newOffset == maxWidth){
                return 0;
            } else{
                return Math.max(newOffset);
            }
        })
    }

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + width;
            const minWidth = 0;
            console.log(newOffset)
            if(newOffset <= 0){
                return Math.min(newOffset);
                
            } else{
                return Math.min(-(width * (sliderImages.length-1)))
            }
        })
    }
    
    
    return(
        <div className="slider-content">
            <div className="slider" ref={sliderRef}>
                <div className="slider-line" ref={sliderLineRef} style={{width: width * sliderImages.length + 'px', transform:`translateX(${offset}px)`}}>
                    
                    {sliderImages.map((item, id) => {
                        return(
                        <img src={item.src} style={{width:width, height:"auto"}} alt={id} key={item.id + id}/>
                        )
                    })}
                </div>
            </div>
            <button className="slider-left" onClick={handleLeftClick}>left</button>
            <button className="slider-right" onClick={handleRightClick}>right</button>
        </div>
    );
}