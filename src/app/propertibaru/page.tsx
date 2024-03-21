import Navbar from "../navbar/page"
import Home from "../page"
export default function PropertiBaru() {

    return (

        <div className="h-screen bg-gradient-to-r from-cyan-800 to-blue-800 pt-3">
            <a href="/">
            <button type="button" className="w-[150px] mb-6  flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </button>
            </a>
            <div className="text-center ">
                
                    <img src="img/Icon-propertybaru.png" className="mx-auto" alt="" />
                    <h1 className="text-white font-bold text-5xl mb-6 ">PROPERTI BARU</h1>
                    <hr className="border-white border-2 w-[350px] mx-auto"></hr>
               
                <p className="mx-auto mt-10 w-[320px] md:w-[1000px] md:text-2xl text-white">Layanan ini merupakan solusi terbaik bagi mereka yang mencari rumah baru atau properti
                    yang masih dalam kondisi prima dan siap huni. Dengan fokus pada properti baru, kami
                    menawarkan keunggulan berupa desain modern, material berkualitas, dan teknologi terkini
                    untuk memenuhi kebutuhan serta gaya hidup konsumen masa kini. Dari apartemen mewah hingga
                    rumah dengan taman yang indah, kami memiliki beragam pilihan properti baru yang dapat disesuaikan dengan preferensi dan budget Anda.
                </p>

            </div>

        </div>
    )
}

