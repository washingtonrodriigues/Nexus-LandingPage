import Card3 from '@/components/ui/Card3/card3';

const FourthSection = () => {
    return (<section className="bg-[#E4E4E4] flex justify-evenly items-center">
        <div className="w-[600px] text-black font-poppins flex flex-col gap-5">
            <h2 className="text-[2.2rem]">
                Qual é o <strong>momento ideal</strong> para a nossa parceria?
            </h2>
            <p className="text-[1.1rem]">
                Não importa se você está iniciando seu negócio ou se já está há um
                bom tempo no ramo, os anúncios online sempre serão uma das
                melhores formas de crescer ou escalar sua marca.
            </p>
        </div>
        <div className="flex flex-col gap-5">
            <Card3 text="Quando você está iniciando seu negócio e não possui experiência." />
            <Card3
                text="Quando você já possui experiência e deseja manter sua agenda cheia
        ou suas vendas."
            />
            <Card3
                text="Quando você já utiliza alguma forma de tráfego pago, mas não está
        obtendo os resultados que deseja ou está ficando no prejuízo."
            />
            <Card3
                text=" Quando você já vende bem, mas deseja escalar ainda mais suas
        vendas e aumentar o seu faturamento."
            />
        </div>
    </section>);
}

export default FourthSection;