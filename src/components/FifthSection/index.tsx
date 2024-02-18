import Card4 from '@/components/ui/Card4/card4';

const FifthSection = () => {
  return (
    <section className="bg-[#222222] flex flex-col gap-[50px] items-center">
      <div className="font-poppins text-center flex flex-col gap-4 lg:gap-3">
        <h1 className="text-[1.5rem] lg:text-[2.2rem] font-bold">
          Os <span className="text-[#3daed3]">anúncios online</span> servem para
          o meu negócio?
        </h1>
        <p className="text-base lg:text-[1.1rem]">
          Sim, o tráfego pago serve para qualquer pessoa ou negócio, seja você:
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-[30px]">
        <Card4 text="Médico" />
        <Card4 text="Empreendedor" />
        <Card4 text="Vendedor" />
        <Card4 text="Dentista" />
        <Card4 text="Loja" />
        <Card4 text="Mercadinho" />
        <Card4 text="E-commerce" />
        <Card4 text="Psicólogo" />
        <Card4 text="Freelancer" />
        <Card4 text="Outro" />
      </div>
    </section>
  );
};

export default FifthSection;
