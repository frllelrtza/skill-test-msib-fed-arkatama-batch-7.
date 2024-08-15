import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <header className="bg-white shadow-md py-2 px-28">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-400">
                <img src="#" alt="Indonesia" className="h-4" />
                <span>Indonesia</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h18M9 3v4m6-4v4m1 12h1a3 3 0 003-3V7H5v10a3 3 0 003 3h1m4 0v2m-8-2a5 5 0 015-5v5h2v-5a5 5 0 015 5m-4 0v2m4-2H8m8 2h1a3 3 0 003-3V7H5v10a3 3 0 003 3z"
                  />
                </svg>
                <span>(+62) 851 6993 3122</span>
              </div>
              <div className="flex items-center space-x-2  text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18V3H3zm3 5h12v10H6V8zm4 5h4m-2-2v4m0-7v1m-2-1v1m2-1v1" />
                </svg>
                <span>hello@alkautsar.id</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="container mx-auto flex justify-between items-center py-4">
            <img src="img/logo.png" alt="Al Kautsar" className="h-12" />
            <nav>
              <ul className="flex space-x-6 text-based font-bold">
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-700">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-700">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-700">
                    Pendaftaran
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-700">
                    Donasi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-700">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-700">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    Masuk
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
                    Daftar Sekarang
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="relative flex items-center justify-between h-screen bg-gray-50 px-6 sm:px-8 lg:px-28">
  <div className="max-w-2xl">
    <h2 className="text-blue-600 text-sm font-semibold mb-2">
      Mau Jadi Generasi Mahir Teknologi, Kuat Iman?
    </h2>
    <h1 className="text-gray-800 text-4xl sm:text-5xl font-bold mb-4">
      Pondok Pesantren <span className="text-blue-600">{'{Technopreneur}'}</span>
    </h1>
    <p className="text-gray-600 text-lg mb-6">
      Mencetak generasi unggul yang mahir di bidang teknologi digital dan teguh dalam pemahaman Islam Ahlu Sunnah Wal Jama’ah
    </p>
    <div className="flex space-x-4">
      <a
        href="#"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
      >
        Jago IT Rajin Ngaji bersama Al Kautsar
      </a>
      <a
        href="#"
        className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 text-base font-medium rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-all"
      >
        Download Profile Kami
      </a>
    </div>
  </div>
  <div className="hidden lg:block lg:w-2/5">
    <img src="/img/hero.png" alt="Students working" className="object-cover w-full h-full" />
  </div>
</section>


        <section className="bg-blue-700 text-white py-20 px-28">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Service</h1>
            <p className="text-lg mb-8">We provide the best solutions for your business.</p>
            <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </a>
          </div>
        </section>

        <section className="py-20 px-28">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Features</h2>
            <div className="flex justify-around">
              <div>
                <img src="/feature1.png" alt="Feature 1" className="mb-4" />
                <h3 className="text-xl font-semibold">Feature 1</h3>
                <p className="text-gray-600">Description of feature 1.</p>
              </div>
              <div>
                <img src="/feature2.png" alt="Feature 2" className="mb-4" />
                <h3 className="text-xl font-semibold">Feature 2</h3>
                <p className="text-gray-600">Description of feature 2.</p>
              </div>
              <div>
                <img src="/feature3.png" alt="Feature 3" className="mb-4" />
                <h3 className="text-xl font-semibold">Feature 3</h3>
                <p className="text-gray-600">Description of feature 3.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20 px-28">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
            <p className="text-gray-600">What our clients say about us.</p>
          </div>
        </section>

        <footer className="bg-blue-700 text-white py-10 px-28">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
