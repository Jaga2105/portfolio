import React from 'react'

const ResumeCard = ({title,subTitle,duration,des}) => {
  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 sm:p-8 lgl:p-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex  justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-md lgl:text-lg mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs sm:text-sm font-medium">
              {duration}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        {des.map((d)=>(
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          • {d}
        </p>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeCard