import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-6 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black px-4 md:px-10 lg:px-20 2xl:px-0"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner