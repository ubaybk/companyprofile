import Navbar from "../navbar/page"
import Home from "../page"
export default function BeliRumah() {

    return (

        <div className="h-auto pb-10 bg-gradient-to-r from-cyan-800 to-blue-800 pt-3">
            <a href="/">
                <button type="button" className="w-[150px] mb-6  flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </button>
            </a>
            <div className="text-center ">

                <img src="img/Icon Beli.png" className="mx-auto" alt="" />
                <h1 className="text-white font-bold text-5xl mb-6 ">BELI RUMAH</h1>
                <hr className="border-white border-2 w-[350px] mx-auto"></hr>

                <p className="mx-auto mt-10 w-[320px] md:w-[1000px] md:text-2xl text-white">Bagi yang ingin memiliki rumah sendiri,
                    layanan beli rumah kami menjadi solusi tepat. Kami memiliki jaringan luas properti yang mencakup berbagai lokasi strategis dan berkembang,
                    sehingga Anda dapat menemukan rumah impian sesuai dengan keinginan dan kebutuhan Anda. Dengan dukungan tim profesional kami, proses pembelian
                    rumah akan menjadi lebih mudah, transparan, dan memberikan kepuasan yang tinggi kepada pelanggan.

                    Kami selalu berkomitmen untuk memberikan layanan terbaik, menjaga kualitas properti, dan memenuhi kebutuhan serta harapan setiap pelanggan. Dengan pengalaman dan reputasi yang solid di industri properti, kami siap membantu Anda dalam mencari dan memilih rumah yang tepat untuk masa depan Anda.
                </p>

            </div>

        </div>
    )
}

