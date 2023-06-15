import { Link } from 'react-router-dom';
import logo1 from '../assets/logo-1.svg';
import logo2 from '../assets/logo-2.svg';
import helpCircle from '../assets/help-circle.svg';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-between items-start bg-[url('/src/assets/Welcome-Page-bg.png')] bg-center bg-cover p-10">
      <div className="w-[150px]">
        <img src={logo1} alt="logo" width="150px" />
      </div>
      <div className="rounded-[16px] bg-[#3F362C] border-4 border-[#E8E4DF] w-[375px] p-8 flex flex-col items-center">
        <img
          src={logo2}
          className="mb-3"
          alt="logo-2"
          width="140px"
        />
        <h3 className="font-archivo text-base font-normal text-white mb-7">
          The secret style for your fashion
        </h3>
        <h4 className="font-archivo text-sm font-normal text-white mb-3">
          Hubungi kami di
        </h4>
        <div className="flex flex-col w-full gap-3 mb-6">
          <a
            href="#"
            className="cursor-pointer bg-[#E8E4DF] w-full font-clashdisplay font-medium text-lg text-[#070504] flex justify-center items-center rounded-lg h-[46px]"
          >
            <h1>WhatsApp</h1>
          </a>
          <a
            href="#"
            className="cursor-pointer bg-[#E8E4DF] w-full font-clashdisplay font-medium text-lg text-[#070504] flex justify-center items-center rounded-lg h-[46px]"
          >
            <h1>Instagram</h1>
          </a>
          <a
            href="#"
            className="cursor-pointer bg-[#E8E4DF] w-full font-clashdisplay font-medium text-lg text-[#070504] flex justify-center items-center rounded-lg h-[46px]"
          >
            <h1>Email</h1>
          </a>
        </div>
        <h4 className="font-archivo text-sm font-normal text-white mb-3">
          Produk kami
        </h4>
        <div className="flex justify-between items-center w-full font-clashdisplay font-bold text-lg text-[#3F362C] gap-2 mb-10">
          <a
            href="#"
            className="w-[147px] h-[147px] rounded-lg bg-[url('/src/assets/hampers-bg.png')] bg-center bg-cover flex justify-center items-center"
          >
            Hampers
          </a>
          <Link
            to="/katalog"
            className="w-[147px] h-[147px] rounded-lg bg-[url('/src/assets/katalog-bg.png')] bg-center bg-cover flex justify-center items-center"
          >
            Katalog
          </Link>
        </div>
        <h4 className="text-center font-archivo text-xs font-normal text-white">
          Copyright © 2023. Made with 💕 Zadakheir
        </h4>
      </div>
      <div className="w-[150px] flex justify-end">
        <img src={helpCircle} alt="help" width="32px" />
      </div>
    </div>
  );
};

export default Home;
