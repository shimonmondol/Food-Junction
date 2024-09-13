import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className='w-[800px] h-[350px] relative mx-auto pt-24'>
            <img src="Images/Frame 51.png" alt="" />
            <div className='absolute inset-36 items-center justify-center'>
                <p className=' text-center font-poppins font-medium text-sm text-[#FB9333]'>Our Subscribe</p>
                <h1 className='text-center font-poppins font-semibold text-[#585858] text-3xl pt-2' >Subscribe To Get The Latest <br />
                Promo from Jez Salad</h1>
                <p className='text-center font-poppins font-medium text-[#575757] text-xs pt-6 pb-12'>We recommended you to subscribe to our promo program,<br /> 
                drop your email below to get daily update about us</p>
                <img className='w-[500px] h-[55px] pl-4' src="Images/Frame 14.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Subscribe