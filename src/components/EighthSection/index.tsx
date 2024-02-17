import Button from '../ui/Button/button';

const EighthSection = () => {
  return (
    <section className="flex flex-col gap-[40px] items-center font-poppins">
      <div className="text-center">
        <h2 className="text-[2.2rem] font-bold">
          Está pronto(a) para{' '}
          <span className="text-[#3daed3]">vender muito mais</span>?
        </h2>
        <p className="text-[1.1rem] mt-5">
          Clique no botão abaixo para iniciar a{' '}
          <span className="text-[#3daed3]">melhor fase</span> do seu negócio
        </p>
      </div>
      <Button style={{ width: '600px' }} text="Garantir Oportunidade" />
    </section>
  );
};

export default EighthSection;
