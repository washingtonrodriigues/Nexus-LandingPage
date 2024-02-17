import Image from 'next/image';
import styles from './styles.module.css';

const Card = ({ src, text }: any) => {
  return (
    <div
      className={`w-[350px] h-[220px] transition duration-300 hover:scale-110 flex items-center gap-5 bg-[#181818] rounded-r-lg text-white ${styles.box_shadow}`}
    >
      <span className="bg-[#3daed3] h-full rounded-l-lg w-[20px]"></span>
      <div className="flex flex-col gap-5">
        <Image src={src} alt="" width={80} height={0} />
        <p className="text-left font-poppins text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Card;
