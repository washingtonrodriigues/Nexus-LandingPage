import Image from 'next/image';
import styles from './styles.module.css';

const Card = ({ src, text }: any) => {
  return (
    <div
      className={`w-[300px] lg:w-[350px] h-[220px] transition duration-300 hover:scale-110 flex flex-col lg:flex-row justify-between items-center lg:gap-5 bg-[#181818] rounded-r-lg text-white ${styles.box_shadow}`}
    >
      <span className="bg-[#3daed3] h-[5px] lg:h-full rounded-l-lg w-[100px] lg:w-[20px]"></span>
      <div className="flex flex-col justify-center mb-5 lg:mb-0 lg:items-start items-center gap-5">
        <Image src={src} alt="" width={80} height={0} />
        <p className="text-center lg:text-left font-poppins lg:text-lg text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
