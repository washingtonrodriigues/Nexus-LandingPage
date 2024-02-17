import Card from '@/components/ui/Card/card';

const FirstSection = () => {
  return (
    <section className="h-auto bg-[#222222] flex flex-col justify-center items-center gap-[50px]">
      <div className="text-[2.5rem] text-center font-poppins">
        <h2>Melhore o seu marketing e</h2>
        <p className="bg-gradient-to-r from-[#256B9C] via-[#3daed3] to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
          aumente o seu faturamento
        </p>
      </div>
      <div className="flex justify-center items-center gap-[50px]">
        <Card
          src="/idea.png"
          text="Use estratégias validadas por grandes empresas"
        />
        <Card
          src="/attraction.png"
          text="Fique na frente da concorrência, atraindo o público certo para o seu negócio"
        />
        <Card
          src="/dolar.png"
          text="Fature muito mais com a melhor agência de tráfego pago"
        />
      </div>
    </section>
  );
};

export default FirstSection;
