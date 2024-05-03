import Card2 from '@/components/ui/Card2/card2';
import Image from 'next/image';

const SecondSection = () => {
  return (
    <section className="bg-[#000] relative lg:mt-[4rem] lg:mb-[8rem] flex flex-col items-center gap-[50px] h-auto">
      <div className="text-center bg-black z-[9999] font-poppins flex flex-col gap-6">
        <h2 className="text-[1.5rem] font-semibold lg:text-[2.2rem] ">
          Evite dores de cabeça
        </h2>
        <p className="text-base lg:text-[1.3rem] lg:w-[800px] mx-[20px]  lg:mx-auto">
          A dificuldade em conseguir mais clientes te faz vender menos e isso,
          indiretamente, também é uma forma de perder dinheiro.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px] mt-8">
        <Card2 text="Não perca tempo estudando como atrair mais clientes" />
        <Card2 text="Não jogue dinheiro fora com anúncios sem nenhuma estratégia" />
        <Card2 text="Não confie seu negócio a quem não te trará resultados reais" />
      </div>
      <Image
        src="/icons/lineandpoints.svg"
        alt=""
        width={1440}
        height={0}
        sizes=""
        className="absolute"
      />
    </section>
  );
};

export default SecondSection;
