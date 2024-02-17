import Button from '../ui/Button/button';

const ThirdSection = () => {
  return (
    <section className="background-third-section flex flex-col gap-5 items-center">
      <h2 className="text-[2.2rem] font-bold">
        Estamos comprometidos em te fazer{' '}
        <span className=" text-[#3daed3]">vender mais</span>
      </h2>
      <p className="w-[800px] text-center text-[1.3rem]">
        Com os cuidados e estratégias de{' '}
        <span className=" text-[#3daed3]">profissionais qualificados</span>, a
        tarefa de atrair clientes para o seu negócio se torna muito mais fácil.
      </p>
      <p className="w-[800px] text-center text-[1.3rem]">
        Além de poupar tempo, você conseguirá um público superaquecido,
        aumentando suas chances de fechar negócio, seja{' '}
        <span className=" text-[#3daed3]">lotando sua agenda</span>
        de atendimentos ou{' '}
        <span className=" text-[#3daed3]">vendendo ainda mais</span> os seus
        produtos ou serviços.
      </p>
      <Button style={{ width: '600px' }} text="Quero vender mais!" />
    </section>
  );
};

export default ThirdSection;
