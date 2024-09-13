import React from 'react'

const Choose = () => {
  return (
    <div className='bg-white'>
        <div className='flex mt-20 ml-3'>
            <div className='mx-auto'>
                <h1 className='font-poppins font-bold text-3xl text-[#585858] ml-24'>WHY CHOOSE US <br /> <span className='text-[#FB9333]'>FOR YOUR HEALTHY FOOD</span></h1>
            </div>
            <div>
                <h1 className='font-poppins font-medium text-sm text-[#828282] mr-56'>We continue to consistently choose and <br /> maintain the quality of the fruit served, so that <br /> it remains fresh and nutritious when you eat it.</h1>
            </div>
        </div>
        <div className='flex ml-3'>
            <div class="box-content w-48 h-64 p-4 border-2 border-orange-50 rounded-2xl ml-44 mt-12">
                <img className='w-20 h-20' src="Images/Choose1.png" alt="" />
                <h1 className='font-poppins font-bold text-[#2B2B2B] mt-8'>Own fruit orchard</h1>
                <p className='font-poppins text-xs text-[#575757] mt-2'>Langsung dari Kebun Sendiri yang <br /> 
                tersebar di setiap provinsi yang <br />
                memiliki cabang toko Jez Salad.</p>
                <div className='flex'>
                    <p className='font-poppins text-xs text-[#575757] mt-8'>Learn More</p>
                    <img className='w-4 h-4 mt-[34px] ml-1' src="Images/Arrow.png" alt="" />
                </div>   
            </div>
            <div class="box-content w-48 h-64 p-4 border-2 bg-[#FFFFFF] border-orange-50 rounded-2xl ml-12 mt-12">
                <img className='w-20 h-20' src="Images/Choose2.png" alt="" />
                <h1 className='font-poppins font-bold text-[#2B2B2B] mt-8'>#1 Healthy Fruit Salad</h1>
                <p className='font-poppins text-xs text-[#575757] mt-2'>The pioneer of healthy fruit salads that 
                are delicious & suitable with the best quality assurance.</p>
                <div>
                    <img className='w-28 h-8 mt-6' src="Images/Frame 11.png" alt="" />
                </div>   
            </div>
            <div class="box-content w-48 h-64 p-4 border-2 border-orange-50 rounded-2xl ml-12 mt-12">
                <img className='w-20 h-20' src="Images/Choose3.png" alt="" />
                <h1 className='font-poppins font-bold text-[#2B2B2B] mt-8'>100 Top Brand</h1>
                <p className='font-poppins text-xs text-[#575757] mt-2'>We are one of the best brands in the 
                Food and Beverage sector <br />
                in Indonesia.</p>
                <div className='flex'>
                    <p className='font-poppins text-xs text-[#575757] mt-8'>Learn More</p>
                    <img className='w-4 h-4 mt-[34px] ml-1' src="Images/Arrow.png" alt="" />
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Choose