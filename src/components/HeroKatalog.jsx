import arrowDown from '../assets/arrow-down.svg';

const HeroKatalog = () => {
  return (
    <div className="relative w-full min-h-screen bg-[url('/src/assets/katalog-hero-bg.png')] bg-center bg-cover flex flex-col justify-center items-center">
      <div className="px-5 lg:px-0 w-full lg:w-[928px] tracking-[2px] text-center text-white font-clashdisplay font-bold text-5xl lg:text-[70px] leading-[50px] lg:leading-[80px] bg-transparent mb-5">
        <h1>The Ultimate Destination for Trendy Muslim Outfits</h1>
      </div>
      <div className="px-5 lg:px-0 w-full lg:w-[928px] tracking-[0.5px] text-[#E8E8E9] text-center text-base lg:text-2xl font-archivo font-normal mb-12">
        <h3>
          Discover the Perfect Blend of Modesty and Fashion at
          Zadakheir Fashion. Shop Now and Embrace Your Unique Style
          with Confidence!
        </h3>
      </div>
      <button className="w-[250px] lg:w-[311px] h-[44px] rounded-lg bg-gradient-to-r from-[#F6CD73] to-[#9C7539] cursor-pointer flex justify-center items-center">
        <h3 className="font-archivo font-semibold text-lg text-[#070504]">
          Shop Now
        </h3>
      </button>
      <div className="flex items-center gap-3 absolute bottom-[30px]">
        <img
          src={arrowDown}
          alt="arrow-down"
          className="text-[#E8E4DF]"
          width={24}
        />
        <h3 className="font-archivo text-[#E8E4DF] font-semibold text-lg">
          Scroll Down
        </h3>
        <img
          src={arrowDown}
          alt="arrow-down"
          className="text-[#E8E4DF]"
          width={24}
        />
      </div>
    </div>
  );
};

export default HeroKatalog;
