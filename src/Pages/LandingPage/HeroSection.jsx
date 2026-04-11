import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row  md:gap-32 justify-center items-center mt-15 md:mt-29 lg:mx-22 '>
      <div className='flex justify-center items-center text-center flex-col gap-4 text-[#070707]'>
        <div className='bg-orange-200 rounded-2xl w-fit px-2 py-1 text-orange-500'>Export Best Quality</div>
        <div className='md:text-7xl text-6xl  inter tracking-wider lg:w-160 lg:leading-20 font-black '>
          Tasty Organic <span className='text-orange-400'>Fruits</span> & <span className='text-orange-400'>Veggies</span> In Your City
        </div>
        <div className='lg:w-140 poppins text-[#686868]'>Brand for a high content of benificial substances. Our products are all  fresh and healthy.</div>
      <div className='bg-gradient-to-b from-orange-400 to-orange-500 w-fit text-white text-2xl flex items-center justify-center py-2 px-6 rounded-sm'>Shop Now</div>
      </div>
      <div><img style={{width : '550px'}} src="/assets/grocery.webp" alt="grocery basket" /></div>
    </div>
  )
}

export default HeroSection