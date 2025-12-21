import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#F5F5F5] w-full'>
      <div className='flex w-[1000px] mx-auto px-2'>
        <div>
            <h1 className='font-roboto text-[#FB9333] text-2xl font-bold pt-6'>JEZ <span className='font-roboto text-[#585858] text-2xl'>SALAD</span> </h1>
        </div>
        <div className='flex pt-6 mx-auto cursor-pointer text-md font-poppins'>
            <p className='pr-6 text-[#FB9300]'>Home</p>
            <p className='pr-6'>Menu</p>
            <p className='pr-6'>Contact</p>
            <p>About Us</p>
        </div>
        <div>
             <img className='w-[100px] pt-3' src="Images/Button.png" alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar