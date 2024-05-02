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
          className="lg:w-[200px] w-[100px] z-[9999]"
          src="/nexuslogo.png"
          alt="Nexus Agência Digital"
          width={200}
          height={0}
          sizes=""
        />
        <p className="lg:text-[3rem] text-[1.5rem] font-semibold">
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
        src="/newbgheader.png"
        width={1440}
        height={0}
        sizes=""
        alt="background"
        className="pt-16 hidden lg:block"
      />
      <Image
        src="/headerbannermobile.png"
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
    // <header className="background-header w-[100vw] lg:flex-row flex flex-col-reverse justify-start px-10 lg:px-8 items-center lg:justify-between">
    //   <div className=" relative lg:from-transparent lg:to-transparent w-[100vw] px-5 lg:px-0 z-20 bg-gradient-to-t from-black via-[#032c52d2] to-[#233d570a] flex flex-col pb-5 lg:pb-0 gap-5 lg:w-[700px]">
    //     <h1 className="font-poppins text-[1.5rem] text-center lg:text-left lg:text-[2.3rem]">
    //       Está vendendo pouco? Eu posso te ajudar{' '}
    //       <span className="text-[#3daed3] font-bold">
    //         aumentar seu número de vendas
    //       </span>{' '}
    //       com anúncios online e de forma automatizada,{' '}
    //       <span className="text-[#3daed3] font-bold">
    //         sem precisar de indicação
    //       </span>
    //     </h1>
    //     <p className="font-montserrat text-base text-center lg:text-left lg:text-[1.3rem]">
    //       Atraia inúmeros clientes que já possuem interesse em comprar seus
    //       produtos ou serviços. Nós podemos te ajudar a triplicar seu
    //       faturamento e evitar dores de cabeça.
    //     </p>
    //     <Button onClick={() => setShowTypebot(true)} text="Quero vender mais" />
    //   </div>
    //   <div className="content lg:relative max-w-[100vw] pb-[220px] lg:pb-0 lg:w-[600px] lg:mb-7 absolute z-10">
    //     <Image
    //       src="/washington.png"
    //       alt="Washington Rodrigues"
    //       width={600}
    //       height={0}
    //       className="washington-img"
    //     />
    //   </div>
    //   <Popup
    //     typebot="my-typebot-auarewe"
    //     isOpen={showTypebot}
    //     onClose={() => setShowTypebot(false)}
    //   />
    // </header>
  );
};

export default Header;
