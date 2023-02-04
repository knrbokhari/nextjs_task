import React from 'react'
import Image from "next/image";
import Hero1 from '../images/hero1.png'
import Nike from '../images/nike.png'
import Adidas from '../images/adidas.png'
import Puma from '../images/puma.png'
import Reebok from '../images/reebok.png'
import { IoIosArrowDroprightCircle, IoMdArrowDroprightCircle } from 'react-icons/io'

const Main = () => {
  return (
    <div className=''>
        <div className="container mx-auto lg:h-[757px] pt-[155px] lg:pt-0">
            <div className="grid lg:grid-cols-2 items-end lg:h-[757px]">
                <div className="">
                    <h1 className='text-[#262524] max-w-[568px] text-[56px] leading-[73px] font-SportingGrotesque font-bold mb-[22px]'>Healthy in side <span className='text-[#8382EB]'>fresh</span> out side</h1>
                    <p className='text-[#26252499] text-[16px] leading-[28px] font-Poppins mb-[22px] w-[489px]'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    <div className='mb-[51px] flex'>
                        <button className='text-[16px] font-Poppins px-[24px] py-[16px] bg-[#264373] shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-white mr-[35px] flex items-center w-[246px] justify-between'>Get started <IoIosArrowDroprightCircle className='h-[26px] w-[26px]' /> </button>
                        <button className='text-[16px] font-Poppins px-[24px] py-[16px] bg-white shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-[#264373] flex items-center w-[174px] justify-between'> <IoMdArrowDroprightCircle className='h-[26px] w-[26px]' /> Learn more </button>
                    </div>
                    <div>
                        <p className='mb-[15px] text-[16px] font-Poppins px-[24px] text-[#262524]'>Brands:</p>
                        <div className='flex justify-between items-center max-w-[460px]'>
                            <Image
                                className="h-[28px] w-[89px]"
                                src={Nike}
                                alt="/"
                            />
                            <Image
                                className="h-[50px] w-[55px]"
                                src={Adidas}
                                alt="/"
                            />
                            <Image
                                className="h-[41px] w-[80px] "
                                src={Puma}
                                alt="/"
                            />
                            <Image
                                className="h-[30px] w-[120px] "
                                src={Reebok}
                                alt="/"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[72px] lg:mt-0">
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

export default Main;