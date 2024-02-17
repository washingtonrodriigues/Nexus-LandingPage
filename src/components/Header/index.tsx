import Image from 'next/image';
import Button from '../ui/Button/button';

const Header = () => {
  return (
    <header className="background-header w-[100vw] flex justify-between px-8 items-center">
      <div className="content w-[700px] flex flex-col gap-5">
        <h1 className="font-poppins text-[2.3rem]">
          Aumente de <span className="text-[#3daed3] font-bold">10 a 40</span> o
          seu número de vendas de forma automatizada,{' '}
          <span className="text-[#3daed3] font-bold">
            sem precisar de indicação
          </span>
        </h1>
        <p className="font-montserrat text-[1.3rem]">
          Atraia inúmeros clientes que já possuem interesse em comprar seus
          produtos ou serviços. Nós podemos te ajudar a triplicar seu
          faturamento e evitar dores de cabeça.
        </p>
        <Button style={{ width: '80%' }} text="Garantir oportunidade" />
      </div>
      <div className="content mb-7">
        <Image
          src="/washington.png"
          alt="Washington Rodrigues"
          width={600}
          height={0}
          className="washington-img"
        />
      </div>
    </header>
  );
};

export default Header;
