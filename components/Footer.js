import React from "react";

function Footer() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <section class="text-gray-600 body-font relative">
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?q=Rotterdam&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
          <div class="container px-5 py-24 mx-auto flex">
            <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                <div>De Start Van Uw Verbouwing Begint Hier</div>
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600">
                Ontvang vandaag nog een vrijblijvende offerte.
              </p>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Verstuur
                </button>
                <p class="text-xs text-gray-500 mt-3">
                  We gebruiken uw email enkel voor correspordentie
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-white" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-10"
                src="https://jrm.geniti.nl/wp-content/uploads/2021/02/2-e1614193189285.png"
                alt="JRM Afbouw"
              />
              <p className="text-gray-500 text-base">
                JRM Afbouw | Stucen En Latex spuiten Mignonpad 13 3194 VH
                Hoogvliet Rotterdam
              </p>
              <div className="flex space-x-6">
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Stucen
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Raapwerk
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Schuurwerk
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Pleisterwerk
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Buitenwerk
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Sierpleister
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Lijsten en Ornamenten
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Latex spuiten
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Binnen
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Buiten{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Gipswanden
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Over ons
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Privacy
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              © 2021 JRM Afbouw, gemaakt door geniti.nl
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
