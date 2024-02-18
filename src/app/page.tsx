'use client';

import Header from '../components/Header';
import FirstSection from '@/components/FirstSection';
import SecondSection from '@/components/SecondSection/index.';
import ThirdSection from '@/components/ThirdSection';
import FourthSection from '@/components/FourthSection';
import FifthSection from '@/components/FifthSection';
import SixthSection from '@/components/SixthSection';
import SeventhSection from '@/components/SeventhSection';
import EighthSection from '@/components/EighthSection';
import Footer from '@/components/Footer';
import TypeBot from '@/components/TypeBot/typebot';

const Home = () => {
  return (
    <div className="overhidden">
      <Header />
      <main>
        {/* <TypeBot /> */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <hr className="opacity-25" />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
