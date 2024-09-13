import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-[800px] mt-56 ml-48'>
        <div>
            <p className='font-roboto text-sm font-semibold'><span className='text-[#FB9333]'>JEZ</span> SALAD</p>
            <p className='font-poppins text-xs text-[#575757] pt-4'>Jez Salad is the pioneer of <br /> 
                healthy fruit salad with <br />
                high nutrition.</p>
            <p className='font-poppins text-xs text-[#575757] pt-12 pb-12'>©Copyright Jez Salad</p>
        </div>
        <div className='ml-24'>
            <p className='font-poppins text-xs font-bold text-[#FB9333]'>Feature</p>
            <p className='font-poppins text-xs text-[#575757] pt-5'>Menu</p>
            <p className='font-poppins text-xs text-[#575757]       pt-4'>Promo</p>
            <p className='font-poppins text-xs text-[#575757]   pt-4'>Contact</p>
            <p className='font-poppins text-xs text-[#575757]   pt-4'>About Us</p>
        </div>
        <div className='ml-24'>
            <p className='font-poppins text-xs font-bold text-[#FB9333]'>Get in Touch</p>
            <div className='flex pt-5'>
                <img className="w-3 h-4" src="Images/Location.png" alt="" />
                <p className='font-poppins text-xs text-[#575757] ml-4'>8819 Ohio St. South Gate, <br />
                CA 90280</p>
            </div>
            <div className='flex pt-5' >
                <img className="w-4 h-3 mt-0.5" src="Images/Mail.png" alt="" />
                <p className='font-poppins text-xs text-[#575757] ml-3 '>Ourstudio@hello.com</p>
            </div>
            <div className='flex pt-5' >
                <img className='w-3.5 h-3.5 mt-0.5' src="Images/Phone.png" alt="" />
                <p className='font-poppins text-xs text-[#575757] ml-3'>+1 386-688-3295</p>
            </div>
        </div>
        <div className='ml-24'>
            <div>
                <img className='w-18 h-4' src="Images/Frame 3.png" alt="" />
                <p className='font-poppins text-xs text-[#575757]     mt-4'>Follow our social media.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer