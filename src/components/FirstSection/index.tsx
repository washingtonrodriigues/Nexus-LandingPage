import Card from '@/components/ui/Card/card';
import Image from 'next/image';

const FirstSection = () => {
  return (
    <section className="h-auto mt-[6rem] lg:mt-[10rem] bg-[#000] flex flex-col justify-center items-center lg:gap-16">
      <div className="text-[1.5rem] px-4 lg:px-0 lg:text-[2.5rem] text-center font-poppins">
        <h2>Melhore o seu marketing e</h2>
        <p className="bg-gradient-to-r from-[#256B9C] via-[#3daed3] to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
          aumente o seu faturamento
        </p>
      </div>
      <div className="flex relative py-16 lg:py-32 px-8  flex-col lg:flex-row justify-center items-center gap-[50px]">
        <div className="z-[9999] flex flex-wrap gap-16 justify-center">
          <Card
            src="/icons/strategy.svg"
            text="Estratégias validadas que irão te ajudar a vender muito mais."
          />
          <Card
            src="/icons/search.svg"
            text="Fique na frente da concorrência, atraindo o público certo para o seu negócio"
          />
          <Card
            src="/icons/money.svg"
            text="Fature muito mais com a melhor agência de tráfego pago"
          />
        </div>
        <div className="absolute border border-solid border-[#3daed3] w-[900px] h-[600px] rounded-[20px]">
          {' '}
          <Image
            className="absolute top-8 right-8"
            src="/icons/ellipsis.svg"
            alt=""
            width={50}
            height={0}
            sizes=""
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
