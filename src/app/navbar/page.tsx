"use client"
import { useState } from "react"
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link'
import Home from "../page";
import HeroSection from "../heroSection/page";
export default function Navbar() {

    const handleWhatsAppClick = () => {
        const whatsappURL = `https://wa.me/${628388399207}`;
        window.open(whatsappURL, '_blank');
      };

    const [show, setShow] = useState<boolean>(false)

    return (


        // Navbar
        <div className=" bg-white  dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="img/Logo Icon.png" className="h-8" alt="rumahLogo" />
                    <span className="font-extrabold self-center text-2xl whitespace-nowrap dark:text-white">Rumah_Ubay</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={handleWhatsAppClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order Sekarang</button>
                    <button onClick={() => setShow(!show)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>




                {show &&
                    <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#home" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                            </li>
                            <li>
                                <a href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#album" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Album</a>
                            </li>
                            <li>
                                <a href="#testimonial" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonial</a>
                            </li>
                            <li>
                                <a href="#randomuser" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Teams</a>
                            </li>
                        </ul>
                    </div>
                }


                <div className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <ScrollLink
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <li>
                            <a href="/heroSection" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</a>
                        </li>
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <li>
                            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang Kami</a>
                        </li>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li>
                            <a href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pelayanan</a>
                        </li>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="album"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li>
                            <a href="album" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Album</a>
                        </li>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="testimonial"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li>
                            <a href="testimonial" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimoni</a>
                        </li>
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="randomuser"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    <li>
                        <a href="#randomuser" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tim Kami</a>
                    </li>
                    </ScrollLink>
                </ul>
            </div>




        </div>
        </div >


    )
}