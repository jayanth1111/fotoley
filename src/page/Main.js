import React, { useEffect, useState } from 'react'
import { content } from './data'
import "./Main.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SlideshowIcon from '@mui/icons-material/Slideshow';
export default function Main() {
    const [slider,setSlider]=useState(0)
    const enlar=(index)=>{
        console.log(index);
        const act=index;
        setSlider(act); 
    }
    const l=content.length;
    const next=()=>{
        setSlider( slider=== l-1 ? 0 : slider+1)
    }
    const prev=()=>{
        setSlider(slider===0 ? l-1 : slider-1)
    }
    const [autoScroll,setAutoscroll]=useState(false);
    const can=()=>{
        
        if(autoScroll===false){
            setAutoscroll(true)
            next();
        }
        else{
            setAutoscroll(false)
        }
        console.log(autoScroll)
        
        
    
    }
    let sinterval;
    function auto(){
         sinterval=setInterval(next,3000)
    }
    useEffect(()=>{
        
        if(autoScroll){
            auto();
        }
        else{

        }
        return()=>clearInterval(sinterval)
      //eslint-disable-next-line react-hooks/exhaustive-deps   
    },[slider])
    

    
    
  return (
    <div className='main'>
        <div className='main1'>
            <div className='main3'>

                <img src={content[slider].poster} alt="" className="imageb"/>
                <div>
                    <div className='head'>{content[slider].title}</div>
                    <div>{content[slider].des}</div>
                </div>
            </div>
            <div className='main2'>
                <ArrowBackIosIcon  className='fo' onClick={prev} />
            {
                
                content.map((data,i)=>
                <img key={data.id} src={data.poster} alt="" onClick={()=>enlar(i)} className={content[slider].id===i?"clicked":'images'}/>
                
                )

            }
            <ArrowForwardIosIcon className='fo' onClick={next}/>
            <SlideshowIcon className='sli' onClick={can}/>

            </div>
            
        </div>
        
    </div>
  )
}
