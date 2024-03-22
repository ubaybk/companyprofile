"use client"
import { Element } from 'react-scroll';
// import { Asset } from "next/font/google"
import { useState } from "react"
import RandomUser from '../randomUser/page';
import Album from '../album/page';
import Testimonial from '../testimonial/page';
// import Link from 'next/link';
// import { Link as ScrollLink } from 'react-scroll';


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

    //FETCH DATA




    return (
        <div className="bg-gradient-to-r from-cyan-800 to-blue-800 h-screen">
            <Element name='home' id='home'>
                <section className="mx-9 ">
                    <div className="container h-screen">
                        <div className="flex z-30 relative">
                            <div className="md:w-1/2">
                                <h1 className="text-4xl sm:mt-32 sm:text-4xl md:mt-30 md:text-4xl lg:mb-10 lg:text-6xl text-white font-extrabold mt-[150px] mb-5">Membantu Temukan Rumah Impian .</h1>
                                <h1 className="text-white mt-[60px] md:w-30 sm:w-[490px] lg:w-[500px]"><span className="font-bold text-white w-1">Rumah_Ubay</span> hadir untuk temukan rumah terbaik untukmu, untuk di jual ataupun di sewa dengan sumber terpercaya</h1>
                                <div className="mt-4">
                                    <a href="#about">
                                        <button type="button" className="font-bold flex border-white text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Temukan Rumah</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img src="/img/Hero Image.webp" alt="rumah" className='absolute bottom-0 right-0 mt-10' />
                        <img src="/img/Accsent 1.png" alt="ascent" className="h-[100px]" />
                    </div>
                </section>
            </Element>

            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-white"></hr>



            {/* About Us */}
            <Element name='about' id='about' className='h-screen bg-gradient-to-r from-cyan-800 to-blue-800'>
                <div className='pt-9'>
                    <h1 className=' text-center text-5xl font-bold mb-3 text-white'>Tentang Kami</h1>
                    <p className='mx-4 text-center text-white'>Jual Sewa Rumah adalah agen properti terpercaya yang mengkhususkan diri
                        dalam jual beli dan sewa properti perumahan. Dengan komitmen yang kuat
                        terhadap keunggulan dan kepuasan pelanggan, kami berusaha memberikan layanan
                        terbaik kepada klien kami dalam menemukan rumah impian mereka atau peluang investasi yang menguntungkan.</p>
                    <div className=' mx-4 text-white'>
                        <h3 className='font-bold text-2xl mt-16  mb-4'>Misi Perusahaan :</h3>
                        <p>Misi kami adalah menjadi pilihan utama bagi individu dan keluarga yang mencari bantuan yang dapat diandalkan
                            dan profesional dalam transaksi properti. Kami bertujuan untuk melampaui ekspektasi pelanggan dengan memberikan
                            solusi yang dipersonalisasi dan membangun hubungan jangka panjang yang didasarkan pada kepercayaan dan integritas.</p>
                    </div>
                </div>

            </Element>

            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-white"></hr>




            {/* Layanan */}

            <Element name='services' id='services'>
                <div className="h-auto bg-gradient-to-r from-cyan-800 to-blue-800">
                    <div className="row-auto">
                        <div className="grid-cols-12 text-center p-11 mx-0">
                            <h2 className="text-5xl font-extrabold mb-3 text-white">Layanan Kami</h2>
                            <span className="font-bold text-[18px] italic text-white">Rumah_Ubay hadir menjadi solusi bagi kamu</span>
                        </div>
                    </div>

                    <div className="row mx-7">

                        <div className="grid grid-row-3 gap-7 text-center lg:grid lg:grid-cols-3">
                            <a href="/propertibaru">
                                <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                    <img src="/img/Icon-propertybaru.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="hover:text-white font-extrabold text-black">Properti Baru</h3>
                                        <p className=" text-black">Rumah impian kini jadi kenyataan,
                                            Beli rumah baru dengan fasilitas
                                            terbaik dengan lingkungan yang nyaman</p>
                                    </div>
                                </div>
                            </a>

                            <a href="/sewarumah">
                                <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                    <img src="/img/Icon Sewa.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="hover:text-white font-extrabold text-black">Sewa Rumah</h3>
                                        <p className=" text-black">Sewa rumah yang indah untuk keluarga anda,
                                            pilihan terbaik untuk tempat tinggal keluarga mu</p>
                                    </div>
                                </div>
                            </a>

                            <a href="/belirumah">
                                <div className="flex justify-center items-center gap-5 flex-col hover:bg-blue-500 w-[100%]  p-[40px] rounded-md bg-white border-white border-2 mb-8  ">
                                    <img src="/img/Icon Beli.png" alt="iconPorperty" className="rounded-[50%] w-[70px] h-[70px] bg-white" />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="hover:text-white font-extrabold text-black">Beli Rumah</h3>
                                        <p className=" text-black">Beli rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>







            </Element>
            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-white"></hr>

            <Element name='album' id='album'>

                <Album />
            </Element>


            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-white"></hr>


            {/* Search */}

            <Element name='testimonial' id='testimonial' className="relative h-screen bg-gradient-to-r from-cyan-800 to-blue-800 md:bg-none">
                <img src="/img/Img-search.webp" alt="imgSearch" className="bg-slate-950 hidden md:block w-full " />
                <div className="row-auto  absolute inset-0 flex justify-center">
                    <div className="grid-cols-12 md:mt-[90px] sm:mt-[100px] text-center ">
                        <div className=''>
                            <Testimonial />
                        </div>
                    </div>

                </div>
            </Element>

            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-white"></hr>

            <Element name='randomuser' id='randomuser' className='h-auto w-auto bg-gradient-to-r from-cyan-800 to-blue-800 md:mt-[120px] md:pt-4 '>
                <h1 className="font-bold pt-8 pb-3 text-4xl sm:text-5xl lg:text-7xl text-center md:mb-4 text-white">Tim Kami</h1>
                <RandomUser />
            </Element>

            <section
                className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
                <div
                    className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Ayo terhubung dengan kami di media sosial!</span>
                    </div>
                    {/* <!-- Social network icons container --> */}
                    <div className="flex justify-center">
                        <a href='https://www.facebook.com/bayu.yupi?mibextid=ZbWKwL' target='_blank' className="hover:text-blue-700 mr-6 text-neutral-600 dark:text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>


                        <a href="https://www.instagram.com/ubaybk?utm_source=qr&igsh=MWcyYXFlMHE0NG4xaw==" target='_blank' className="hover:text-blue-700 mr-6 text-neutral-600 dark:text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a href="https://github.com/ubaybk" target='_blank' className="text-neutral-600 hover:text-blue-700 dark:text-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- TW Elements section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-4 w-4">
                                    <path
                                        d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                                </svg>
                                Rumah_Ubay
                            </h6>
                            <p>
                                Rumah_Ubay hadir untuk temukan rumah terbaik untukmu, untuk di jual ataupun di sewa dengan sumber terpercaya
                            </p>
                        </div>
                        {/* <!-- Products section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                LAYANAN KAMI
                            </h6>

                            <p className="mb-4">
                                <a href='/propertibaru' target='_blank' className="hover:text-blue-400 text-neutral-600 dark:text-neutral-200"
                                >Properti Baru</a>
                            </p>
                            <p className="mb-4">
                                <a href='/sewarumah' target='_blank' className="hover:text-blue-400 text-neutral-600 dark:text-neutral-200"
                                >Sewa Rumah</a>
                            </p>
                            <p className="mb-4">
                                <a href='/belirumah' target='_blank' className="hover:text-blue-400 text-neutral-600 dark:text-neutral-200"
                                >Beli Rumah</a>
                            </p>

                        </div>
                        {/* <!-- Useful links section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Kunjungi
                            </h6>
                            <p id='/' className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Alamat Kami: <br/> Jl. Srengseng Sawah NO.36 Jagakarsa Jakarta Selatan </a>
                            </p>



                            

                        </div>
                        {/* <!-- Contact section --> */}
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Kontak
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                Jakarta, Jakarta Selatan
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                bayu@example.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                                + 01 234 567 88
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                        clipRule="evenodd" />
                                </svg>
                                + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                    <span>© 2024 Copyright:</span>
                    <a
                        className="font-semibold text-neutral-600 dark:text-neutral-400"
                        href=""
                    > Rumah_Ubay</a>
                </div>
            </section>



        </div>
    )
}