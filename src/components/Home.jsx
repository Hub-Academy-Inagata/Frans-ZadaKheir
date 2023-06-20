// import { Link } from 'react-router-dom';
import logo1 from '../assets/logo-1.svg';
import logo2 from '../assets/logo-2.svg';
import helpCircle from '../assets/help-circle.svg';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center  lg:justify-between lg:items-start bg-[url('/src/assets/Welcome-Page-bg.png')] bg-center bg-cover p-0 lg:p-10">
      <div className="w-[150px] hidden lg:block">
        <img src={logo1} alt="logo" width="150px" />
      </div>
      <div className="w-full md:w-[375px] 2xl:h-[90vh] flex items-center">
        <div className="md:rounded-[16px] md:bg-[#3F362C] border-0 md:border-4 border-[#E8E4DF] w-full p-8 flex flex-col items-center">
          <img
            src={logo2}
            className="mb-3"
            alt="logo-2"
            width="140px"
          />
          <h3 className="text-center font-archivo text-base font-normal text-white mb-7">
            The secret style for your fashion
          </h3>
          <h4 className="font-archivo text-sm font-normal text-white mb-3">
            Hubungi kami di
          </h4>
          <div className="flex flex-col w-full gap-4 mb-6">
            <a
              href="#"
              className="cursor-pointer bg-[#E8E4DF] w-full font-clashdisplay font-medium text-lg text-[#070504] flex justify-center items-center rounded-lg h-[46px] lg:hover:scale-105 lg:hover:-translate-y-1 lg:hover:shadow-md lg:hover:shadow-[#edb60048] transition"
            >
              <h1>WhatsApp</h1>
            </a>
            <a
              href="#"
              className="cursor-pointer bg-[#E8E4DF] w-full font-clashdisplay font-medium text-lg text-[#070504] flex justify-center items-center rounded-lg h-[46px] lg:hover:scale-105 lg:hover:-translate-y-1 lg:hover:shadow-md lg:hover:shadow-[#edb60048] transition"
            >
              <h1>Instagram</h1>
            </a>
            <a
              href="#"
              className="cursor-pointer bg-[#E8E4DF] w-full font-clashdisplay font-medium text-lg text-[#070504] flex justify-center items-center rounded-lg h-[46px] lg:hover:scale-105 lg:hover:-translate-y-1 lg:hover:shadow-md lg:hover:shadow-[#edb60048] transition"
            >
              <h1>Email</h1>
            </a>
          </div>
          <h4 className="font-archivo text-sm font-normal text-white mb-3">
            Produk kami
          </h4>
          <div className="grid grid-cols-2 w-full font-clashdisplay font-bold text-lg text-[#3F362C] gap-3 mb-10">
            <a
              href="#"
              className="w-full h-[147px] rounded-lg bg-[url('/src/assets/hampers-bg.png')] bg-center bg-cover flex justify-center items-center lg:hover:scale-105 lg:hover:-translate-y-1 lg:hover:shadow-md lg:hover:shadow-[#edb60048] transition"
            >
              Hampers
            </a>
            <a
              href="/Frans-ZadaKheir/katalog.html"
              className="w-full h-[147px] rounded-lg bg-[url('/src/assets/katalog-bg.png')] bg-center bg-cover flex justify-center items-center lg:hover:scale-105 lg:hover:-translate-y-1 lg:hover:shadow-md lg:hover:shadow-[#edb60048] transition"
            >
              Katalog
            </a>
          </div>
          <h4 className="text-center font-archivo text-xs font-normal text-white">
            Copyright © 2023. Made with 💕 Zadakheir
          </h4>
        </div>
      </div>

      <div className="w-[150px] hidden lg:flex justify-end">
        <img src={helpCircle} alt="help" width="32px" />
      </div>
    </div>
  );
};

export default Home;
