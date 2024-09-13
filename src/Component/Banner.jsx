import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center justify-center ml-10'>
        <div className='mr-12'>
            <h1 className='bg-[#FFF0DC] w-[145px] h-[30px] font-poppins font-bold text-xs text-[#FB9333] rounded-2xl px-2 py-2 '>#1  Best Healthy Salad</h1>
            <h1 className='text-5xl font-poppins font-bold pt-10 leading-tight text-[#575757]'><span className='text-[#FB9333]'>Skip</span> The Diet,<br /> Just Eat Healthy <br />With Jez Salad</h1>
            <p className='font-poppins text-[#828282] pt-4'>Imagine you don't need a diet because we provide <br /> 
            healthy and delicious food for you!</p>
            <img className='w-[120px] pt-4 pr-2' src="Images/Frame 7.png" alt="" />
            <div className='flex'>
                <div>
                    <p  className='font-poppins text-base font-semibold text-[#575757] pt-12'>5000+</p>
                    <p className='font-poppins font-semibold text-[#828282]'>Customer</p>
                </div>
                <div className='pl-8'>
                    <p className='font-poppins text-base font-semibold text-[#575757] pt-12'>8000+</p>
                    <p className='font-poppins font-semibold text-[#828282]'>Delivery</p>
                </div>
                <div className='pl-8'>
                    <p className='font-poppins text-base font-semibold text-[#575757] pt-12' >1000+</p>
                    <p className='font-poppins font-semibold text-[#828282]'>Ratings</p>
                </div>
            </div>
        </div>
        <div className='ml-4'>
            <img className='w-[400px] h-[450px] mt-[60px]' src="Images/Illustration.png" alt="" />
        </div>
    </div>
  )
}

export default Banner