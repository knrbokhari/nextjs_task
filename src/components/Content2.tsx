import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import person1 from '../images/person1.png'

const Content2 = () => {
  return (
    <div className='container mx-auto md:p-[85px] bg-[linear-gradient(87.05deg,_#6462F0_0%,_#9190E9_95%)] rounded-[30px]'>
        <div className="grid lg:grid-cols-3">
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
                    <Link href='/' className='text-[#26252499] text-[16px] leading-[28px] font-Poppins'>Learn more</Link>
                </div>
            </div>
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
                    <h3 className='font-Poppins font-bold text-[20px] leading-[28px] text-white w-[155px] mb-[16px] '>14 Days sherd challenge</h3>
                    <Link href='/' className='text-[#26252499] text-[16px] leading-[28px] font-Poppins'>Learn more</Link>
                </div>
            </div>
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
                    <h3 className='font-Poppins font-bold text-[20px] leading-[28px] text-white w-[155px] mb-[16px] '>Get flat belly in 30 days</h3>
                    <Link href='/' className='text-[#26252499] text-[16px] leading-[28px] font-Poppins'>Learn more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content2;