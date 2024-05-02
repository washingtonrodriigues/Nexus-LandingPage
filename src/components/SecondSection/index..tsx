import Card2 from '@/components/ui/Card2/card2';

const SecondSection = () => {
  return (
    <section className="bg-[#000] my-[8rem] flex flex-col items-center gap-[50px] h-auto">
      <div className="text-center font-poppins w-full flex flex-col gap-5">
        <h2 className="text-[1.5rem] lg:text-[2.2rem]">
          Evite{' '}
          <span className="font-bold uppercase text-green-300">
            dores de cabeça
          </span>{' '}
          para conseguir mais clientes
        </h2>
        <p className="text-base lg:text-[1.3rem] lg:w-[800px] mx-[20px] lg:mx-auto">
          Se feito do jeito errado, algo simples como conseguir mais clientes
          pode te dar um baita de um trabalho ou até mesmo um prejuízo
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[50px]">
        <Card2 text="Não perca tempo estudando como atrair mais clientes" />
        <Card2 text="Não jogue dinheiro fora com anúncios sem nenhuma estratégia" />
        <Card2 text="Não confie seu negócio a quem não te trará resultados reais" />
      </div>
    </section>
  );
};

export default SecondSection;
