'use client';

import { FaFire } from 'react-icons/fa';
import styles from './styles.module.css';
import Link from 'next/link';

const Button = ({ text, style, onClick }: any) => {
  return (
    <Link
      onClick={onClick}
      href=""
      className={`flex mt-5 hover:scale-105 transition-all duration-300 gap-2 uppercase font-semibold text-[1rem] w-[280px] lg:w-[500px] text-center lg:text-[1.2rem] font-montserrat  rounded-[50px] p-4 lg:p-5 items-center justify-center tracking-[2px] mx-auto lg:mx-0 hover:tracking-[3px] ${styles.animated_btn}`}
      style={style}
    >
      <FaFire />
      <span>{text}</span>
    </Link>
  );
};

export default Button;
