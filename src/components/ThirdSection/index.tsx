import { useState } from 'react';
import Button from '../ui/Button/button';
import { Popup } from '@typebot.io/nextjs';
import Image from 'next/image';

const ThirdSection = () => {
  const [showTypebot, setShowTypebot] = useState(false);

  return (
    <section className="w-[90%] bg-gradient-to-r from-[#3daede] via-[#1a78a1]  to-[#076087] mx-auto rounded-3xl relative text-center font-franklin px-16">
      <Image
        className="absolute inset-0 mx-auto top-[-3rem]"
        src="/nexusshortlogo.png"
        alt="Nexus Gestão de Tráfego"
        width={100}
        height={0}
        sizes=""
      />
      <h2 className="text-[1.7rem] font-semibold my-4">
        Se você sente que ainda não vende como deveria, então você provavelmente
        está perdendo dinheiro.
      </h2>
      <p>
        Às vezes, você só precisa das estratégias certas para destravar o seu
        negócio e começar a vender mais. Para isso, vocês tem duas opções:
        aprender e fazer por conta própria, ou confiar em alguém com experiência
        e que já sabe o caminho certo a seguir para ter bons resultados.
      </p>
    </section>
  );
};

export default ThirdSection;
