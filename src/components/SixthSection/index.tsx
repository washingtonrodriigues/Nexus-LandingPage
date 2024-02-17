import Button from '../ui/Button/button';

const SixthSection = () => {
  return (
    <section className="bg-[#222222] flex flex-col gap-[50px] items-center">
      <div className="font-poppins text-center flex flex-col gap-3">
        <h2 className="text-[2.2rem] font-bold">O que nós oferecemos?</h2>
        <p className="text-[1.1rem]">
          Anúncios estratégicos nas{' '}
          <span className="text-[#3daed3]">melhores plataformas</span> e{' '}
          <span className="text-[#3daed3]">redes sociais</span>
        </p>
        <p className="text-[1.1rem]">
          Consultoria, onde criaremos estratégias baseadas no perfil do seu
          negócio para atrair o público certo.
        </p>
      </div>
      <div className="flex gap-[30px]">
        <span className="border-[2px] border-solid border-[#3daed3] drop-shadow-md shadow-[#3daed3] hover:bg-[#235581] duration-300 transition hover:border-[#235581] rounded-lg p-5 text-[1.1rem]">
          Meta ADS (Facebook e Instagram)
        </span>
        <span className="border-[2px] border-solid border-[#3daed3] hover:bg-[#235581] hover:border-[#235581] duration-300 transition rounded-lg p-5 text-[1.1rem]">
          Google ADS (Google e Youtube)
        </span>
      </div>
      <Button text="Entre em contato conosco" />
    </section>
  );
};

export default SixthSection;
