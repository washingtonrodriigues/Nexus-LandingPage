import { useState } from 'react';
import Button from '../ui/Button/button';
import { Popup } from '@typebot.io/nextjs';

const SixthSection = () => {
  const [showTypebot, setShowTypebot] = useState(false);

  return (
    <section className="bg-[#222222] flex flex-col gap-[50px] items-center">
      <div className="font-poppins text-center flex flex-col gap-5 lg:gap-3">
        <h2 className="text-[1.5rem] lg:text-[2.2rem] font-bold">
          O que nós oferecemos?
        </h2>
        <p className="text-base lg:text-[1.1rem]">
          Anúncios estratégicos nas{' '}
          <span className="text-[#3daed3]">melhores plataformas</span> e{' '}
          <span className="text-[#3daed3]">redes sociais</span>
        </p>
        <p className="text-base px-5 lg:px-0 lg:text-[1.1rem]">
          Consultoria, onde criaremos estratégias baseadas no perfil do seu
          negócio para atrair o público certo.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row text-center gap-[30px]">
        <span className="border-[2px] border-solid border-[#3daed3] drop-shadow-md shadow-[#3daed3] hover:bg-[#235581] duration-300 transition hover:border-[#235581] rounded-lg p-5 text-[1.1rem]">
          Meta ADS (Facebook e Instagram)
        </span>
        <span className="border-[2px] border-solid border-[#3daed3] hover:bg-[#235581] hover:border-[#235581] duration-300 transition rounded-lg p-5 text-[1.1rem]">
          Google ADS (Google e Youtube)
        </span>
      </div>
      <Button
        onClick={() => setShowTypebot(true)}
        text="Entre em contato conosco"
        style={{ margin: '0 20px' }}
      />
      <Popup
        typebot="my-typebot-auarewe"
        isOpen={showTypebot}
        onClose={() => setShowTypebot(false)}
      />
    </section>
  );
};

export default SixthSection;
