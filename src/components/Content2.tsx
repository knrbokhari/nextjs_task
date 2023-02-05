import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import { ImArrowRight2 } from 'react-icons/im'

const Content2 = () => {
  return (
    <div className='container mx-auto relative z-10'>
        <div className='px-[25px] md:px-[0px]'>
            <div className='px-[28px] py-[35px] md:p-[85px] bg-[linear-gradient(87.05deg,_#6462F0_0%,_#9190E9_95%)] rounded-[30px]'>
                <div className="lg:flex justify-between">
                    <div className='flex flex-row items-center mb-[50px] lg:m-0'>
                        <div className='h-[100px] w-[100px] flex justify-center items-center bg-[#ffffff33] rounded-[20px]'>
                            <Image
                                className=""
                                src={person1}
                                alt="/"
                                width={39}
                                height={48}
                            />
                        </div>
                        <div className='ml-[30px]'>
                            <h3 className='font-Poppins font-bold text-[20px] leading-[28px] text-white w-[155px] mb-[16px] '>Get that 11 line in 30 days</h3>
                            <Link href='/' className='text-[#FFFFFF] text-[16px] leading-[28px] font-Poppins flex items-center opacity-30'>Learn more <ImArrowRight2 className='ml-[20px]'/> </Link>
                        </div>
                    </div>
                    <div className='flex flex-row items-center mb-[50px] lg:m-0'>
                        <div className='h-[100px] w-[100px] flex justify-center items-center bg-[#ffffff33] rounded-[20px]'>
                            <Image
                                className=""
                                src={person2}
                                alt="/"
                                width={39}
                                height={48}
                            />
                        </div>
                        <div className='ml-[30px]'>
                            <h3 className='font-Poppins font-bold text-[20px] leading-[28px] text-white w-[155px] mb-[16px] '>14 Days sherd challenge</h3>
                            <Link href='/' className='text-[#FFFFFF] text-[16px] leading-[28px] font-Poppins flex items-center opacity-30'>Learn more <ImArrowRight2 className='ml-[20px]'/> </Link>
                        </div>
                    </div>
                    <div className='flex flex-row items-center lg:m-0'>
                        <div className='h-[100px] w-[100px] flex justify-center items-center bg-[#ffffff33] rounded-[20px]'>
                            <Image
                                className=""
                                src={person3}
                                alt="/"
                                width={39}
                                height={48}
                            />
                        </div>
                        <div className='ml-[30px]'>
                            <h3 className='font-Poppins font-bold text-[20px] leading-[28px] text-white w-[155px] mb-[16px] '>Get flat belly in 30 days</h3>
                            <Link href='/' className='text-[#FFFFFF] text-[16px] leading-[28px] font-Poppins flex items-center opacity-50'>Learn more <ImArrowRight2 className='ml-[20px] text-[#262524]'/>  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content2;