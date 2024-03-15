"use client"
import { Element } from 'react-scroll';
import { Asset } from "next/font/google"
import { useState } from "react"

interface TabProps {
    id: string;
    label: string;
}
export default function HeroSection() {
    const [activeTab, setActiveTab] = useState('app');

    const tabs: TabProps[] = [
        { id: 'app', label: 'App' },
        { id: 'message', label: 'Messages' },
        { id: 'settings', label: 'Settings' },
    ];

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };


    return (
        <div className="bg-gradient-to-r from-cyan-800 to-blue-800 h-screen">
            <Element name='home' id='home'>
            <section className="mx-9 ">
                <div className="container h-screen">
                    <div className="flex">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl sm:mt-32 md:mt-30 lg:mb-10 lg:text-6xl sm:text-sm text-white font-extrabold mt-24 mb-5">Membantu Temukan Rumah Impian .</h1>
                            <h1 className="text-white md:w-3 sm:w-44 lg:w-[500px]"><span className="font-bold text-white w-1">RumahKu</span> hadir untuk temukan rumah terbaik untukmu, untuk di jual ataupun di sewa dengan sumber terpercaya</h1>
                            <div className="flex mt-4">
                                <button type="button" className="font-bold border-white text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Temukan Rumah</button>
                                <a href="#">
                                    <img src="img/arrow.png" alt="arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src="/img/Hero Image.png" alt="rumah" className='absolute bottom-0 right-0 mt-10' />
                    <img src="/img/Accsent 1.png" alt="ascent" className="h-[100px]" />
                </div>
            </section>


            </Element>
            


            {/* About Us */}
            <Element name='about' id='about'>
                <section className='h-screen container bg-slate-400'>
                    <div className='mx-auto'>x
                        <div className='text-center font-bold text-5xl text-white'>About</div>

                    </div>
                </section>
            </Element>




            {/* Layanan */}

            <Element name='services' id='services'>
                <div className="container">
                    <div className="row-auto">
                        <div className="grid-cols-12 text-center p-11 mx-0">
                            <h2 className="text-5xl font-extrabold mb-3 text-blue-800">Layanan Kami</h2>
                            <span className="font-bold text-[18px] italic">Rumah_Ubay hadir menjadi solusi bagi kamu</span>
                        </div>
                    </div>

                    <div className="row mx-7">
                        <div className="grid grid-cols-3 gap-7 text-center">
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon-propertybaru.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Properti Baru</h3>
                                    <p className=" text-black">Rumah impian kini jadi kenyataan,
                                        Beli rumah baru dengan fasilitas
                                        terbaik dengan lingkungan yang nyaman</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Sewa.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Sewa Rumah</h3>
                                    <p className=" text-black">Sewa rumah yang indah untuk keluarga anda,
                                        pilihan terbaik untuk tempat tinggal keluarga mu</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Beli.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Beli Rumah</h3>
                                    <p className=" text-black">Beli rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-7">
                        <div className="grid grid-row-3 gap-7 text-center">
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon-propertybaru.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Properti Baru</h3>
                                    <p className=" text-black">Rumah impian kini jadi kenyataan,
                                        Beli rumah baru dengan fasilitas
                                        terbaik dengan lingkungan yang nyaman</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Sewa.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Sewa Rumah</h3>
                                    <p className=" text-black">Sewa rumah yang indah untuk keluarga anda,
                                        pilihan terbaik untuk tempat tinggal keluarga mu</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Beli.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Beli Rumah</h3>
                                    <p className=" text-black">Beli rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </Element>
            <section>
                <div className="container">
                    <div className="row-auto">
                        <div className="grid-cols-12 text-center p-11 mx-0">
                            <h2 className="text-5xl font-extrabold mb-3 text-blue-800">Layanan Kami</h2>
                            <span className="font-bold text-[18px] italic">Rumah_Ubay hadir menjadi solusi bagi kamu</span>
                        </div>
                    </div>

                    <div className="row mx-7">
                        <div className="grid grid-cols-3 gap-7 text-center">
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon-propertybaru.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Properti Baru</h3>
                                    <p className=" text-black">Rumah impian kini jadi kenyataan,
                                        Beli rumah baru dengan fasilitas
                                        terbaik dengan lingkungan yang nyaman</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Sewa.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Sewa Rumah</h3>
                                    <p className=" text-black">Sewa rumah yang indah untuk keluarga anda,
                                        pilihan terbaik untuk tempat tinggal keluarga mu</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Beli.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Beli Rumah</h3>
                                    <p className=" text-black">Beli rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-7">
                        <div className="grid grid-row-3 gap-7 text-center">
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon-propertybaru.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Properti Baru</h3>
                                    <p className=" text-black">Rumah impian kini jadi kenyataan,
                                        Beli rumah baru dengan fasilitas
                                        terbaik dengan lingkungan yang nyaman</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Sewa.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Sewa Rumah</h3>
                                    <p className=" text-black">Sewa rumah yang indah untuk keluarga anda,
                                        pilihan terbaik untuk tempat tinggal keluarga mu</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                <img src="/img/Icon Beli.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                <div className="flex flex-col gap-3">
                                    <h3 className="hover:text-white font-extrabold text-black">Beli Rumah</h3>
                                    <p className=" text-black">Beli rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Search */}
            <section className="h-screen relative">
                <img src="/img/Img-search.png" alt="imgSearch" className="" />
                <div className="row-auto  absolute inset-0 flex justify-center  top-0">
                    <div className="grid-cols-12 md:mt-[150px] sm:mt-[100px] text-center ">
                        <h2 className="text-center font-extrabold mb-3  lg:text-7xl text-white">
                            Temukan Rumah Impianmu
                        </h2>
                        <p className="font-bold sm:text-[12px] md:text-[18px] lg:text-[18px] italic text-white">Sekarang anda dapat menghemat semua hal stres, waktu, dan biaya tersembunyi dengan ratusan rumah untuk anda </p>

                        <div className="grid-cols-10 mx-auto mt-8">

                            {/* <div className="w-2/3">
                                <div className="relative right-0">
                                    <ul
                                        className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
                                        data-tabs="tabs"
                                        role="list"
                                    >
                                        {tabs.map((tab) => (
                                            <li key={tab.id} className="z-30 flex-auto text-center">
                                                <button
                                                    className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${activeTab === tab.id ? 'bg-blue-500 text-white' : ''}`}
                                                    onClick={() => handleTabChange(tab.id)}
                                                    role="tab"
                                                    aria-selected={activeTab === tab.id ? 'true' : 'false'}
                                                    aria-controls={tab.id}
                                                >
                                                    <span className="ml-1">{tab.label}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div data-tab-content="" className="p-5">
                                        <div className={`block ${activeTab === 'app' ? 'opacity-100' : 'opacity-0'}`} id="app" role="tabpanel">
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                                                Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.
                                            </p>
                                        </div>
                                        <div className={`hidden ${activeTab === 'message' ? 'opacity-100' : 'opacity-0'}`} id="message" role="tabpanel">
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                                                The reading of all good books is like a conversation with the finest minds of past centuries.
                                            </p>
                                        </div>
                                        <div className={`hidden ${activeTab === 'settings' ? 'opacity-100' : 'opacity-0'}`} id="settings" role="tabpanel">
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                                                Comparing yourself to others is the thief of joy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                        </div>
                    </div>


                </div>

            </section>

        </div>
    )
}