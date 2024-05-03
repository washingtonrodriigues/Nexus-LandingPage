import Image from 'next/image';
import styles from './styles.module.css';

const Card2 = ({ text }: any) => {
  return (
    // <div className="w-[320px] hover:translate-y-[-20px] transition duration-300 relative overflow-x-hidden h-[180px] rounded-lg font-poppins flex items-center text-center drop-shadow-2xl text-[1.2rem] bg-gradient-to-b from-[#3daed3] to-[#12599b]">
    <div className="border border-solid border-[#3daede] border-b-transparent rounded-[16px] w-[350px] text-center px-8 py-12 transition-all duration-500 hover:border-transparent hover:border-b-[#3daede] hover:scale-105 relative">
      {/* <div className=" absolute top-[-10px] left-1 flex gap-1">
        <span className="bg-[#12599b] w-[5px] h-[30px] rotate-45"></span>
        <span className="bg-[#12599b] w-[5px] h-[50px] rotate-45"></span>
      </div> */}
      <Image
        className=" top-[-16px] absolute inset-0 mx-auto"
        src="/icons/circle.svg"
        alt=""
        width={30}
        height={0}
        sizes=""
      />
      {text}
    </div>
  );
};

export default Card2;
