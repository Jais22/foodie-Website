import React, { useEffect, useState } from 'react'
import{FaAngleLeft ,FaAngleRight} from"react-icons/fa"
const Hero = () => {
    const imgData=[
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ]
    const[slider ,setSlider]=useState(2)
    const handlePlus=()=>{
        setSlider(slider===imgData.length-1 ? 0:slider+1)
    }
    const handleMinus=()=>{
        setSlider(slider===0?imgData.length-1:slider-1)
    };
    useEffect(()=>{
        const slider=setInterval(()=>
        {
            handlePlus();
        },2000)
        return()=> clearInterval(slider)
    },[slider])

  return (
    <div className='mt-[100px]'>
        <div className='w-[90%] mx-aut0 h-[80vh] my-5 relative'>
            {
                imgData.map((item,i)=>(
                    <div key={i} className={`${slider===i? "block":"hidden"}`}>
                        <img src={item.url} alt='no' className='w-full h-[80vh] rounded-2xl object-cover'/>

                    </div>
                ))
            }
        
        </div>
        <div className='w-full mx-auto h-[100vh] bg-black opacity-30 absolute top-[100px] left-0 rounded-2xl'></div>
        <div className='absolute top-[50%] text-center w-full font-semibold text-white text-[30px] flex justify-center'>
        <p>Welcome to the World of Tasty & Fresh Food</p>
        </div>
       
        <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
            <FaAngleLeft size={30} className='cursor-pointer' onClick={handleMinus}/>
            <FaAngleRight size={30} className='cursor-pointer' onClick={handlePlus}/>
        </div>
    </div>
  )
}

export default Hero