"use client"

import { FC, useState } from 'react';

const Testimonial: FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const testimonials = [
      {
        name: 'dr. Maryati',
        job: 'Dokter Umum',
        avatar: 'testimoni/drmaryati.jpg',
        testimonial: `Saya sangat puas dengan layanan dari agen properti ini dalam menjual rumah saya. 
        Mereka sangat profesional dan kompeten dalam menangani proses penjualan. 
        Rumah saya terjual dengan cepat dan harga yang sesuai dengan harapan saya. Terima kasih banyak!`,
        stars: 5,
      },
      {
        name: 'Rudi Irawan',
        job: 'PNS',
        avatar: 'testimoni/pak rudi.png',
        testimonial: `Saya ingin merekomendasikan agen properti ini kepada siapa pun yang mencari sewa rumah.
        Mereka membantu saya menemukan rumah yang sempurna sesuai kebutuhan saya dan menyediakan layanan purna 
        jual yang luar biasa. Saya sangat senang dengan pengalaman menyewa rumah melalui mereka.`,
        stars: 4,
      },
      {
        name: 'Bayu Kurniawan',
        job: 'IT Web Developer',
        avatar: 'testimoni/Bayu Kurniawan.png',
        testimonial: `Saya ingin berbagi pengalaman positif saya dalam menyewa rumah melalui agen properti ini. Mereka memiliki banyak pilihan rumah yang sesuai dengan kebutuhan dan budget saya. Proses sewa berjalan lancar, dan mereka responsif terhadap pertanyaan dan permintaan saya. Sangat puas dengan layanan mereka!`,
        stars: 4,
      },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="container my-24 mt-auto md:px-6 md:mt-3">
        <section className="mb-32 text-center">
        <h2 className="text-center font-extrabold mb-3 text-4xl mt-2 sm:-mt-[46px] lg:text-7xl text-white">
                            Apa Kata Mereka
                        </h2>
          <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
  
          <div
            id="carouselExampleCaptions"
            className="relative overflow-hidden"
            data-te-carousel-init
            data-te-carousel-slide
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-item ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                data-te-carousel-item
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[100px] sm:w-[200px] md:w-[150px]"
                  src={testimonial.avatar}
                  alt="avatar"
                />
                <div className="flex flex-col items-center justify-center">
                  <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                  <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                    {testimonial.job}
                  </p>
                  <p className="mb-6 font-bold text-white dark:text-neutral-300">{testimonial.testimonial}</p>
                  <ul className="mb-0 flex justify-center">
                    {[...Array(testimonial.stars)].map((_, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="gold"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
  
          <button
            className=" absolute top-1/2 -translate-y-1/2 left-7 mt-auto lg:mt-[80px] lg:left-[300px] z-[1] flex items-center justify-center bg-white bg-opacity-25 p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300 ease-in-out transform-gpu focus:outline-none"
            type="button"
            onClick={prevSlide}
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6"
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            className=" absolute top-1/2 -translate-y-1/2 right-7 mt-auto lg:mt-[80px] lg:right-[300px] z-[1] flex items-center justify-center bg-white bg-opacity-25 p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-300 ease-in-out transform-gpu focus:outline-none"
            type="button"
            onClick={nextSlide}
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </section>
      </div>
    );
  };

  export default Testimonial;