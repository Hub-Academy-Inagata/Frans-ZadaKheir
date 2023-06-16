import PropTypes from 'prop-types';
import starIcon from '../assets/star.svg';

const SalesCard = ({ image }) => {
  return (
    <div className="w-full rounded-lg bg-[#E8E4DF] overflow-hidden relative">
      <div className="w-full h-[175px] lg:h-[313px] relative">
        <img
          src={image ? image : 'https://dummyimage.com/313x313'}
          alt="figure"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-3 left-3 bg-[#EDBF7D] rounded-lg px-2 py-1 lg:px-3 lg:py-2">
          <h3 className="font-archivo font-bold text-[8px] lg:text-xs text-[#3F362C]">
            TOP PICK`S
          </h3>
        </div>
      </div>

      <div className="w-full p-4">
        <h3 className="uppercase font-clashdisplay font-semibold text-base text-[#070504]">
          KIRA PASHMINA OVAL
        </h3>
        <div className="flex justify-between items-center py-2">
          <div className="flex lg:gap-[3px] items-center">
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[10px] lg:w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[10px] lg:w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[10px] lg:w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[10px] lg:w-[15px]"
            />
            <img
              src={starIcon}
              alt="star"
              className="text-[#EDB600] w-[10px] lg:w-[15px]"
            />
          </div>
          <h3 className="font-archivo font-medium text-xs text-[#774C29]">
            1Rb Terjual
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
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

SalesCard.propTypes = {
  image: PropTypes.any.isRequired,
};

export default SalesCard;
