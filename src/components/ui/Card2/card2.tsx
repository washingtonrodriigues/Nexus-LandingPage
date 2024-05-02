import styles from './styles.module.css';

const Card2 = ({ text }: any) => {
  return (
    // <div className="w-[320px] hover:translate-y-[-20px] transition duration-300 relative overflow-x-hidden h-[180px] rounded-lg font-poppins flex items-center text-center drop-shadow-2xl text-[1.2rem] bg-gradient-to-b from-[#3daed3] to-[#12599b]">
    <div className={styles.card}>
      {/* <div className=" absolute top-[-10px] left-1 flex gap-1">
        <span className="bg-[#12599b] w-[5px] h-[30px] rotate-45"></span>
        <span className="bg-[#12599b] w-[5px] h-[50px] rotate-45"></span>
      </div> */}
      {text}
    </div>
  );
};

export default Card2;
