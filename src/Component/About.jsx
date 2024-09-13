import React from 'react'

const About = () => {
  return (
    <div className='flex w-[1172px] h-[500px] bg-orange-50 mt-24 pt-20 pl-48'>
        <div>
            <div>
                <div>
                    <h1 className='font-poppins font-bold text-3xl text-[#333333]'>
                        What Are People <br />
                        Saying <span className='text-[#FB9333]'>About Us</span> 
                    </h1>
                    <p className='font-poppins text-xs text-[#999999] pt-8'>We are very happy if you are satisfied with our <br /> service and products, let's read pure reviews from <br /> customers who bought our products.</p>
                </div>

                <div className='flex mt-4'>
                    <h1 className='font-raieway font-bold text-4xl text-[#333333]'>02</h1>
                    <h1 className='font-raieway font-bold text-xs text-[#CCCCCC] mt-5'>/ 05</h1> 
                </div>  
                <img className='w-20 h-8 mt-4' src="Images/Frame 39.png" alt="" />
            </div>
        </div>
        <div className='flex relative'>
            <img className='absolute w-12 h-12 ml-16 ' src="Images/Person1.png" alt="" />
            <div className='bg-white w-48 h-72 ml-12 mt-5'>
                <h1 className='font-poppins font-medium text-[#2B2B2B] mt-20 ml-4'>Selena Gomz</h1>
                <p className='font-poppins font-medium text-xs text-[#999999] mt-1 ml-4'>22 years</p>
                <p className='font-poppins font-regular text-xs text-[#575757] mt-4 ml-4'>The salad is fresh!!! Don't ask <br /> about the sauce again, it's <br /> really delicious, it's going to <br /> be routine. I recommend this salad to all of you guys! <br /> because they really take <br /> care of the quality.</p>
            </div>
            <img className='absolute w-12 h-12 ml-[304px]' src="Images/Person2.png" alt="" />
            <div className='bg-white w-48 h-72 ml-12 mt-5'>
                <h1 className='font-poppins font-medium text-[#2B2B2B] mt-20 ml-4'>David Ken</h1>
                <p className='font-poppins font-medium text-xs text-[#999999] mt-1 ml-4'>24 years</p>
                <p className='font-poppins font-regular text-xs text-[#575757] mt-4 ml-4'>The salad is fresh!!! Don't ask <br /> about the sauce again, it's <br /> really delicious, it's going to <br /> be routine. I recommend this salad to all of you guys! <br /> because they really take <br /> care of the quality.</p>
            </div>
            <img className='absolute w-12 h-12 ml-[544px]' src="Images/Person3.png" alt="" />
            <div className='bg-white w-48 h-72 ml-12 mt-5'>
                <h1 className='font-poppins font-medium text-[#2B2B2B] mt-20 ml-4'>Jennifer Sina</h1>
                <p className='font-poppins font-medium text-xs text-[#999999] mt-1 ml-4'>21 years</p>
                <p className='font-poppins font-regular text-xs text-[#575757] mt-4 ml-4'>The salad is fresh!!! Don't ask <br /> about the sauce again, it's <br /> really delicious, it's going to <br /> be routine. I recommend this salad to all of you guys! <br /> because they really take <br /> care of the quality.</p>
            </div>
        </div>
        
    </div>
  )
}

export default About