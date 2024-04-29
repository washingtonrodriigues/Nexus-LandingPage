import { useState } from 'react';
import Button from '../ui/Button/button';
import { Popup } from '@typebot.io/nextjs';

const EighthSection = () => {
  const [showTypebot, setShowTypebot] = useState(false);

  return (
    <section className="flex flex-col gap-[30px] lg:gap-[40px] items-center font-poppins">
      <div className="text-center">
        <h2 className="text-[1.5rem] lg:text-[2.2rem] font-bold">
          Está pronto(a) para{' '}
          <span className="text-[#3daed3]">vender muito mais</span>?
        </h2>
        <p className="text-base px-5 lg:px-0 lg:text-[1.1rem] mt-5">
          Clique no botão abaixo para iniciar a{' '}
          <span className="text-[#3daed3]">melhor fase</span> do seu negócio
        </p>
      </div>
      <Button onClick={() => setShowTypebot(true)} text="Quero vender mais" />
      <Popup
        typebot="my-typebot-auarewe"
        isOpen={showTypebot}
        onClose={() => setShowTypebot(false)}
      />
    </section>
  );
};

export default EighthSection;
