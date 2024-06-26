const Card3 = ({ text }: any) => {
  return (
    <div className="border border-solid border-[#3daede] hover:border-[#256B9C] p-5 font-poppins text-[1.1rem] rounded-lg flex items-center justify-center w-[320px] lg:w-[450px] min-h-[150px] hover:scale-105 hover:bg-[#256B9C] transition duration-300">
      <p>{text}</p>
    </div>
  );
};

export default Card3;
