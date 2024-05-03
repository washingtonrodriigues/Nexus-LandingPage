import Image from 'next/image';
import Button from '../ui/Button/button';
import { useState } from 'react';
import { Popup } from '@typebot.io/nextjs';

const Header = () => {
  const [showTypebot, setShowTypebot] = useState(false);

  return (
    <header className="relative lg:h-[900px]">
      <div className="lg:absolute top-[8%] lg:top-[15%] left-8 font-franklin lg:w-[650px] flex flex-col gap-8 pt-[200px] px-4 lg:px-0 lg:pt-0 text-center lg:text-left">
        <Image
          className="lg:w-[200px] w-[100px] z-[9999] mx-auto lg:mx-0"
          src="/nexuslogo.png"
          alt="Nexus Agência Digital"
          width={200}
          height={0}
          sizes=""
        />
        <p className="lg:text-[3rem] text-[1.5rem] font-semibold z-[9999]">
          A partir de agora, seu maior problema será ter clientes demais.
        </p>
        <p className=" lg:text-[1.5rem] opacity-70">
          Aumente o seu número de vendas e seja a primeira opção dos seus
          clientes, através de uma parceria duradoura com uma agência de tráfego
          experiente e que dá resultados.
        </p>
        <Button onClick={() => setShowTypebot(true)} text="Quero vender mais" />
      </div>
      <Image
        src="/bgheaderdesktop.png"
        width={1440}
        height={0}
        sizes=""
        alt="background"
        className="pt-16 hidden lg:block"
      />
      <Image
        src="/bgheadermobile.png"
        width={600}
        height={0}
        sizes=""
        alt="background"
        className="pt-16 block lg:hidden absolute top-[-4rem]"
      />
      <Popup
        typebot="my-typebot-auarewe"
        isOpen={showTypebot}
        onClose={() => setShowTypebot(false)}
      />
      <Image
        src="/icons/decorator.svg"
        width={600}
        height={0}
        sizes=""
        alt="background"
        className="absolute bottom-[-10rem] left-[3rem] w-[250px] lg:w-[600px]"
      />
    </header>
  );
};

export default Header;
