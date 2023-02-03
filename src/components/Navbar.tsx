import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const [position, setPosition] = useState('fixed')

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
    <div className='flex justify-center'>
        <div
    // style={{ backgroundColor: `${navBg}` }}
    className={
      shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100] container'
    }
  >
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='/'>
        <p className='text-[#6765F0] font-SportingGrotesque text-xl'> <span className='text-white bg-[#6765F0] rounded-[10px] pl-[5px] pt-[3px] pr-[6px] pb-[2px] mr-[5px]'>Gym</span>baran </p>
      </Link>
      <div>
        <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/'>Home</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/'>Program</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/'>Blog</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/'>About us</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/'>Log in</Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className='md:hidden'
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {/* Overlay */}
    <div
      className={
        nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
      }
    >
      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
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
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Program
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              Blog
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
              About us
              </li>
            </Link>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Log in
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