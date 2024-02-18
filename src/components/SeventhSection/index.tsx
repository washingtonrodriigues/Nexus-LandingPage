import Image from 'next/image';

const SeventhSection = () => {
  return (
    <section className="bg-[#e4e4e4] flex flex-col-reverse lg:flex-row justify-center px-[30px] gap-[30px] items-center">
      <div>
        <Image
          src="/washington-family.jpg"
          alt="Minha família"
          width={600}
          height={400}
        />
      </div>
      <div className="text-black flex flex-col gap-3 font-poppins lg:w-[500px]">
        <h2 className="text-[1.5rem] text-center lg:text-left lg:text-[2.2rem]">
          Conheça quem está à frente da
          <strong className="text-[#235581]"> Nexus Digital</strong>
        </h2>
        <p className="text-base text-center lg:text-left lg:text-[1.1rem]">
          Washington Rodrigues, 26 anos, natural de Aracaju-SE e casado com
          Larissa Rodrigues. Empreendedor, tornou-se especialista em Tráfego
          Pago e Desenvolvimento Web. Fundou a Nexus Agência Digital no ano de
          2020, aculumando até hoje mais de 100k investidos em anúncios.
        </p>
        <div className="text-center lg:text-left mt-4 lg:mt-0">
          <p className="italic text-sm lg:text-[1.1rem]">
            "O nosso negócio é fazer crescer o seu!"
          </p>
          <span className="text-[#235581] text-sm lg:text-base">
            Washington Rodrigues
          </span>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
