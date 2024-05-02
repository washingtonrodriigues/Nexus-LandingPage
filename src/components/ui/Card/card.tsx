import Image from 'next/image';

const Card = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="bg-black border border-solid border-[#3daed3] w-[280px] h-[280px] flex flex-col justify-center items-center lg:block lg:h-[350px] lg:w-[350px] rounded-[20px] py-14 px-8 hover:scale-105 transition-all duration-300">
      <Image src={src} alt="" width={90} height={0} className="h-[80px] mb-8" />
      <p className="text-center lg:text-left font-poppins lg:text-lg text-base">
        {text}
      </p>
    </div>
  );
};

export default Card;
