import styles from './styles.module.css';

const Card4 = ({ text }: any) => {
  return (
    <div
      className={`bg-gradient-to-r from-[#3daed3] to-[#1b3968] border-l-[10px] border-solid rounded-md py-5 px-3 text-center text-[1.1rem] min-w-[150px] font-poppins border-[#d1d1d1] transition duration-300 hover:scale-105`}
    >
      {text}
    </div>
  );
};

export default Card4;
