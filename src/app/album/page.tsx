"use client"
import { useState } from 'react';

const Album = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePrevClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
    };
  
    return (
      
      <div id="gallery" className="bg-gradient-to-r from-cyan-800 to-blue-800 relative w-full h-screen flex justify-center items-center" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-full w-full">
          {/* Item 1 */}
          <div className={`duration-700 ease-in-out ${activeIndex === 1 ? 'block' : 'hidden'} w-full h-full flex justify-center items-center`} data-carousel-item>
            <img src="album/Rekomendasi2.png" className="object-cover object-center max-h-full max-w-full" alt="" />
          </div>
          {/* Item 2 */}
          <div className={`duration-700 ease-in-out ${activeIndex === 2 ? 'block' : 'hidden'} w-full h-full flex justify-center items-center`} data-carousel-item="active">
            <img src="album/Rekomendasi1.png" className="object-cover object-center max-h-full max-w-full" alt="" />
          </div>
          {/* Item 3 */}
          <div className={`duration-700 ease-in-out ${activeIndex === 3 ? 'block' : 'hidden'} w-full h-full flex justify-center items-center`} data-carousel-item>
            <img src="album/Rekomendasi2.png" className="object-cover object-center max-h-full max-w-full" alt="" />
          </div>
          {/* Item 4 */}
          <div className={`duration-700 ease-in-out ${activeIndex === 4 ? 'block' : 'hidden'} w-full h-full flex justify-center items-center`} data-carousel-item>
            <img src="album/Rekomendasi3.png" className="object-cover object-center max-h-full max-w-full" alt="" />
          </div>
          {/* Item 5 */}
          <div className={`duration-700 ease-in-out ${activeIndex === 5 ? 'block' : 'hidden'} w-full h-full flex justify-center items-center`} data-carousel-item>
            <img src="album/Rekomendasi4.png" className="object-cover object-center max-h-full max-w-full" alt="" />
          </div>
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrevClick}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNextClick}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>

        {/* absolute top-1/2 -translate-y-1/2 left-7 mt-auto lg:mt-[80px] lg:left-[300px] z-[1] flex items-center justify-center bg-white bg-opacity-25 p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300 ease-in-out transform-gpu focus:outline-none */}
      </div>
    );
  };
  
export default Album;