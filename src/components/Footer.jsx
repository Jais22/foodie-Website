import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6'>
            <div>
                <h2 className='font-bold mb-3 text-[30px]'>Yummy Food</h2>
                <p className='text-[20px] text-[gray]'>@2024 Bundl technologies pvt.Ltd</p>
            </div>

            <div>
                <p className='font-bold mb-3 text-[25px]'>Company</p>
                <p className='text-[20px] mb-2 text-[gray]'>About</p>
                <p className='text-[20px] mb-2 text-[gray]'>Careers</p>
                <p className='text-[20px] mb-2 text-[gray]'>Teams</p>
                <p className='text-[20px] mb-2 text-[gray]'>Swiggy One</p>
            </div>

            <div>
                <p className='font-bold mb-3 text-[25px]'>Help & Support</p>
                <p className='text-[20px] mb-2 text-[gray]'>Company</p>
                <p className='text-[20px] mb-2 text-[gray]'>Partner with us</p>
                <p className='text-[20px] mb-2 text-[gray]'>Ride with Us</p>
            </div>

            <div>
                <p className='font-bold mb-3 text-[25px]'>We deliver to</p>
                <p className='text-[20px] mb-2 text-[gray]'>Banglore</p>
                <p className='text-[20px] mb-2 text-[gray]'>Delhi</p>
                <p className='text-[20px] mb-2 text-[gray]'>Gurgaon</p>
                <p className='text-[20px] mb-2 text-[gray]'>Delhi</p>
                <p className='text-[20px] mb-2 text-[gray]'>Mumbai</p>
                <p className='text-[20px] mb-2 text-[gray]'>Pune</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer