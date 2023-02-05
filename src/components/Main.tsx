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
    <div className='relative z-10'>
        <div className="container mx-auto lg:h-[757px] pt-[155px] md:pt-[230px] lg:pt-0">
            <div className="grid lg:grid-cols-2 px-[25px] md:px-[8px] items-end lg:h-[757px]">
                <div className="">
                    <h1 className='text-[#262524] lg:max-w-[568px] text-[56px] leading-[73px] font-SportingGrotesque font-bold mb-[22px]'>Healthy in side <span className='text-[#8382EB]'>fresh</span> out side</h1>
                    <p className='text-[#26252499] text-[16px] leading-[28px] font-Poppins mb-[22px] lg:max-w-[489px]'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    <div className='mb-[51px] flex'>
                        <button className='text-[16px] font-Poppins px-[24px] py-[16px] bg-[#264373] shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-white mr-[35px] flex items-center w-[245px] min-w-[180px] justify-between'>Get started <IoIosArrowDroprightCircle className='h-[26px] w-[26px]' /> </button>
                        <button className='text-[16px] font-Poppins px-[21px] py-[16px] bg-white shadow-[0_20px_80px_rgba(51,78,123,0.3)] rounded-[10px] text-[#264373] flex items-center max-w-[190px] min-w-[170px] justify-between'> <IoMdArrowDroprightCircle className='h-[26px] w-[26px]' /> Learn more </button>
                    </div>
                    <div>
                        <p className='mb-[15px] text-[16px] font-Poppins px-[24px] text-[#262524]'>Brands:</p>
                        <div className='flex justify-between items-center w-full lg:max-w-[460px]'>
                            <Image
                                className="h-[21px] w-[45px] md:h-[28px] md:w-[89px]"
                                src={Nike}
                                alt="/"
                            />
                            <Image
                                className="h-[40px] w-[42px] md:h-[50px] md:w-[55px]"
                                src={Adidas}
                                alt="/"
                            />
                            <Image
                                className="h-[31px] w-[61px] md:h-[41px] md:w-[80px]"
                                src={Puma}
                                alt="/"
                            />
                            <Image
                                className="h-[23px] w-[92px] md:h-[30px] md:w-[120px]"
                                src={Reebok}
                                alt="/"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[72px] mx-auto lg:m-0">
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