import Navbar from './Navbar';
import HeroKatalog from './HeroKatalog';
import figure1 from '../assets/figure1.jpg';
import figure2 from '../assets/figure2.jpg';
import figure3 from '../assets/figure3.jpg';
import SalesCard from './SalesCard';

const Katalog = () => {
  return (
    <div className="w-full min-h-screen bg-[#3F362C]">
      <Navbar />
      <HeroKatalog />
      <div className="w-full mx-auto container py-24">
        <h2 className="text-center uppercase text-4xl lg:text-[56px] font-bold font-clashdisplay text-white tracking-[2px] mb-8">
          new sales
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-10 px-5">
          <SalesCard image={figure1} />
          <SalesCard image={figure2} />
          <SalesCard image={figure3} />
          <SalesCard image={figure1} />
        </div>
      </div>
    </div>
  );
};

export default Katalog;
