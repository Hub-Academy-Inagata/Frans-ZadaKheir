import Navbar from './Navbar';
import HeroKatalog from './HeroKatalog';
import SalesCard from './SalesCard';

const Katalog = () => {
  return (
    <div className="w-full min-h-screen bg-[#3F362C]">
      <Navbar />
      <HeroKatalog />
      <div className="w-full mx-auto container py-24">
        <h2 className="text-center uppercase text-[56px] font-bold font-clashdisplay text-white tracking-[2px] mb-8">
          new sales
        </h2>
        <div className="grid grid-cols-4 w-full gap-10">
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
        </div>
      </div>
    </div>
  );
};

export default Katalog;
