import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="flex w-full group">
      <div className="w-10 h-[6px] bg-opacity-30 mt-16 relative">
        <span className="flex absolute -top-2 -left-3 justify-center items-center w-5 h-5 bg-black bg-opacity-60 rounded-full">
          <span className="inline-flex w-3 h-3 rounded-full duration-300 bg-bodyColor group-hover:bg-designColor"></span>
        </span>
      </div>
      <div className="flex flex-col gap-4 justify-center p-4 w-full bg-black bg-opacity-20 rounded-lg duration-300 hover:bg-opacity-30 lgl:px-10 lgl:gap-6 shadow-shadowOne">
        <div className="flex flex-col gap-2 justify-between lgl:flex-row lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl font-semibold duration-300 md:text-2xl group-hover:text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-400 duration-300 group-hover:text-white">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="flex justify-center items-center px-4 py-2 text-sm font-medium bg-black bg-opacity-25 rounded-lg text-designColor shadow-shadowOne">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-400 duration-300 md:text-base group-hover:text-gray-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
