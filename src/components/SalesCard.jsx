import figure1 from '../assets/figure1.jpg';
import starIcon from '../assets/star.svg';

const SalesCard = () => {
  return (
    <div className="w-full rounded-lg bg-[#E8E4DF] overflow-hidden relative">
      <img src={figure1} alt="figure" className="w-full h-[313px]" />
      <div className="w-full p-4">
        <h3 className="uppercase font-clashdisplay font-semibold text-base text-[#070504]">
          KIRA PASHMINA OVAL
        </h3>
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-[3px] items-center">
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[15px]"
            />
          </div>
          <h3 className="font-archivo font-medium text-xs text-[#774C29]">
            1Rb Terjual
          </h3>
        </div>
        <div className="flex gap-1 items-center">
          <h3 className="text-[#9B2828] font-clashdisplay font-semibold text-xs line-through">
            Rp105.000
          </h3>
          <h3 className="text-[#3F362C] font-clashdisplay font-semibold text-base">
            Rp55.000
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
