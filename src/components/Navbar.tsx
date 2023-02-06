import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);


  return (
    <div className=''>
        <div
    className={
      shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-white px-[25px] md:px -[8px]'
        : 'fixed w-full h-20 z-[100] md:mt-[42px] bg-white md:bg-transparent px-[25px] md:px -[8px]'
    }
  >
    <div className='container mx-auto flex justify-between items-center w-full h-[80px] '>
      <Link href='/'>
        <p className='text-[#6765F0] font-SportingGrotesque text-xl'> <span className='text-white bg-[#6765F0] rounded-[10px] pl-[5px] pt-[3px] pr-[6px] pb-[2px] mr-[5px] shadow-[0px_20px_80px_rgba(51,_78,_123,_0.3)]'>Gym</span>baran </p>
      </Link>
      <div>
        <ul className='hidden text-[#1f2937] lg:flex items-center'>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/' className='text-black font-Poppins text-[16px] leading-[24px]'>Home</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/' className='text-black font-Poppins text-[16px] leading-[24px]'>Program</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/' className='text-black font-Poppins text-[16px] leading-[24px]'>Blog</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/' className='text-black font-Poppins text-[16px] leading-[24px]'>About us</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/' className='text-black font-Poppins text-[16px] leading-[24px]'>
              <button className='bg-[#264373] rounded-[10px] shadow-[0px_20px_80px_rgba(51,_78,_123,_0.3)] px-[34px] py-[15px] text-white font-Poppins text-[16px] leading-[24px] '>Log in</button>
            </Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className='lg:hidden text-[#1f2937]'
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {/* Overlay */}
    <div
      className={
        nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
      }
    >
      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div>
            <div className='flex w-full items-center justify-between'>
            <Link href='/'>
                <p className='text-[#6765F0] font-SportingGrotesque text-xl'> <span className='text-white bg-[#6765F0] rounded-[10px] pl-[5px] pt-[3px] pr-[6px] pb-[2px] mr-[5px]'>Gym</span>baran </p>
            </Link>
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-black font-Poppins text-[16px] leading-[24px]'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-black font-Poppins text-[16px] leading-[24px]'>
                Program
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-black font-Poppins text-[16px] leading-[24px]'>
              Blog
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-black font-Poppins text-[16px] leading-[24px]'>
              About us
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className=''>
                <button className='bg-[#264373] rounded-[10px] shadow-[0px_20px_80px_rgba(51,_78,_123,_0.3)] px-[34px] py-[15px] text-white font-Poppins text-[16px] leading-[24px] '>Log in</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Navbar;