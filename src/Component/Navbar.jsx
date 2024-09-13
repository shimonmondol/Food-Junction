import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='w-[840px] mx-auto flex pl-5'>
        <div>
            <h1 className='font-roboto text-[#FB9333] text-xs font-bold pt-6 pl-2'>JEZ <span className='font-roboto text-[#585858] text-xs'>SALAD</span> </h1>
        </div>
        <div className='flex font-poppins text-xs pt-6 mx-auto'>
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