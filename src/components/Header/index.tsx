import Image from 'next/image';
import Button from '../ui/Button/button';
import { useState } from 'react';
import { Popup } from '@typebot.io/nextjs';

const Header = () => {
  const [showTypebot, setShowTypebot] = useState(false);

  return (
    <header className="background-header w-[100vw] lg:flex-row flex flex-col-reverse justify-start px-10 lg:px-8 items-center lg:justify-between">
      <div className=" relative lg:from-transparent lg:to-transparent w-[100vw] px-5 lg:px-0 z-20 bg-gradient-to-t from-black via-[#032c52d2] to-[#233d570a] flex flex-col pb-5 lg:pb-0 gap-5 lg:w-[700px]">
        <h1 className="font-poppins text-[1.5rem] text-center lg:text-left lg:text-[2.3rem]">
          Aumente de <span className="text-[#3daed3] font-bold">10 a 40</span> o
          seu número de <span className="text-[#3daed3] font-bold">vendas</span>{' '}
          de forma automatizada,{' '}
          <span className="text-[#3daed3] font-bold">
            sem precisar de indicação
          </span>
        </h1>
        <p className="font-montserrat text-base text-center lg:text-left lg:text-[1.3rem]">
          Atraia inúmeros clientes que já possuem interesse em comprar seus
          produtos ou serviços. Nós podemos te ajudar a triplicar seu
          faturamento e evitar dores de cabeça.
        </p>
        <Button
          onClick={() => setShowTypebot(true)}
          text="Garantir oportunidade"
        />
      </div>
      <div className="content lg:relative max-w-[100vw] pb-[220px] lg:pb-0 lg:w-[600px] lg:mb-7 absolute z-10">
        <Image
          src="/washington.png"
          alt="Washington Rodrigues"
          width={600}
          height={0}
          className="washington-img"
        />
      </div>
      <Popup
        typebot="my-typebot-auarewe"
        isOpen={showTypebot}
        onClose={() => setShowTypebot(false)}
      />
    </header>
  );
};

export default Header;
