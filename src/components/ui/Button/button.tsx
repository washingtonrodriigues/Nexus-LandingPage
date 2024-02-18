'use client';

import { FaFire } from 'react-icons/fa';
import styles from './styles.module.css';
import Link from 'next/link';
import TypeBot from '@/components/TypeBot/typebot';

const Button = ({ text, style, onClick }: any) => {
  return (
    <Link
      onClick={onClick}
      href=""
      className={`flex mt-5 hover:scale-110 transition duration-300 gap-2 uppercase font-semibold text-[1.1rem] lg:w-[80%] text-center lg:text-[1.2rem] font-montserrat  rounded-lg p-4 lg:p-5 items-center justify-center tracking-[2px] ${styles.animated_btn}`}
      style={style}
    >
      <FaFire />
      <span>{text}</span>
    </Link>
  );
};

export default Button;
