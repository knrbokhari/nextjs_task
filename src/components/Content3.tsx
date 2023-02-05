import React from 'react'
import Image from "next/image";
import Hero1 from '../images/hero2.png'
import { ImArrowRight2 } from 'react-icons/im'


const Content3 = () => {
  return (
    <div className="container mx-auto mb-[90px] mt-[120px] relative z-10">
            <div className='px-[25px] md:px-0'>
                <div className="lg:flex lg:flex-row-reverse items-end">
                    <div className="basis-1/2">
                        <h1 className='text-[#262524] max-w-[558px] text-[46px] leading-[73px] font-SportingGrotesque mb-[30px]'>Best full body workout to lose fat</h1>
                        <p className='text-[#26252499] text-[16px] leading-[28px] font-Poppins mb-[50px] max-w-[553px]'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                        <button className='text-[16px] font-Poppins px-[24px] py-[16px] bg-[#264373] shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-white mb-[50px] flex items-center justify-between w-[245px]'>Get started <ImArrowRight2 className='text-[16px]' /> </button>
                    </div>
                    <div className="basis-1/2 mt-60px mx-auto lg:m-0">
                        <Image
                            className=""
                            src={Hero1}
                            alt="/"
                        /> 
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Content3;