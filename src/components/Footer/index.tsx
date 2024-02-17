'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(new Date().getFullYear() as any);
  });
  return (
    <footer className="flex py-[50px] flex-col justify-center items-center gap-8">
      <span className="font-montserrat">
        © {date} Todos os direitos reservados
      </span>
      <Image
        src="/nexuslogo.png"
        alt="Nexus Agência Digital"
        width={150}
        height={0}
      />
    </footer>
  );
};

export default Footer;
