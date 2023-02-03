import React from 'react'

const Main = () => {
  return (
    <div className=''>
        <div className="container mx-auto h-[757px]">
            <div className="grid lg:grid-cols-2 items-end h-[757px]">
                <div className="">
                    <h1 className='text-[#262524] max-w-[568px] text-[56px] leading-[73px] font-SportingGrotesque font-bold mb-[22px]'>Healthy in side <span className='text-[#8382EB]'>fresh</span> out side</h1>
                    <p className='text-[#26252499] text-[16px] leading-[24px] font-Poppins mb-[22px] w-[489px]'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    <div className='mb-[51px]'>
                        <button className='text-[16px] font-Poppins px-[24px] py-[16px] bg-[#264373] shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-white mr-[35px]'>Get started</button>
                        <button className='text-[16px] font-Poppins px-[24px] py-[16px] bg-white shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-[#264373]'>Learn more</button>
                    </div>
                    <div>
                        <p className='mb-[15px]'>Brands:</p>
                        <div className='flex justify-around'>
                            <p>Nike</p>
                            <p>adidas</p>
                            <p>puma</p>
                            <p>reebok</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=""></div>

        </div>
    </div>
  )
}

export default Main;