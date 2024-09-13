import React from 'react'

const Discount = () => {
  return (
    <div className='w-[800px] mx-auto'>
        <div className='text-center'>
            <p className='font-poppins font-medium text-xs text-[#FB9333] pt-20'>MENU YANG MEMBUATMU JATUH CINTA</p>
            <h1 className='font-poppins font-medium text-3xl text-[#585858] pt-4 leading-snug'>ENJOY THE BEST MENU AND GET <br /> 
            <span className='text-[#FB9333]'> DISCOUNTS</span> AVAILABLE</h1>
        </div>
        <div className='flex pt-12'>
            <img className='w-[270px] h-[320px]' src="Images/Menu1.png" alt="" />
            <img className='w-[270px] h-[320px] pl-6' src="Images/Menu2.png" alt="" />
            <img className='w-[270px] h-[320px] pl-6' src="Images/Menu3.png" alt="" />
        </div>
    </div>
  )
}

export default Discount