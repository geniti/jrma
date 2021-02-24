import Link from "next/link";
import BlogCards from "../components/BlogCards";
import CardSimple from "../components/CardSimple";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home({ posts }) {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto flex-row flex sm:grid-flow-row">
        <div className="w-1/3">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <h3 className="mb-2 text-1xl md:text-xl text-red-600">
              Stucen en Latex spuiten
            </h3>
            <h2 className="text-4xl mb-2 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-xl">
              Welkom bij JRM AFBOUW
            </h2>
            <p className="mb-5">
              Als stukadoor in Rotterdam en omgeving zorgen we ervoor dat ieder
              project met succes wordt afgerond. Door middel van puur
              vakmanschap, enthousiasme en veel toewijding voor ons beroep
              krijgen we dat voor elkaar. Daarnaast gebruiken we altijd de
              modernste technieken en materialen.
            </p>
            <button className="bg-red-600 p-5 mb-2 text-white rounded-lg">
              Aan de slag
            </button>
          </div>
        </div>
        <div className="w-2/3">
          <BlogCards />
        </div>
      </div>
      <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20 lg:mb-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
              <p className="text-base leading-6 text-red-500 font-semibold uppercase">
                Voor elke klus
              </p>
              <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Heldere afspraken en planning
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Het hele bouwproject, van offerte tot factuur, staat in het
                teken van heldere afspraken.{" "}
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                En een planning waarin rekening wordt gehouden met alle
                werkzaamheden.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                U krijgt een prachtig resultaat, tegelijkertijd bespaart u ook
                op de kosten..
              </p>
              <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Vrijblijvende offerte
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      100% Garantie
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      24/7 Bereikbaar
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      De leukste vakmannen
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-buitenmuur-770x420.jpg"
                    alt="1"
                  />
                  <img
                    className="rounded-lg shadow-lg w-40 md:w-64"
                    width="260"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
                    alt="2"
                  />
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    className="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
                    alt="3"
                  />
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-buitenmuur-770x420.jpg"
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
        <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Neem contact op</span>
            <span className="block text-red-500">
              voor een vrijblijvende offerte
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Aan de slag
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
          className="absolute h-full max-w-1/2 hidden lg:grid right-0 top-0"
        />
      </div>
      <div className="max-w-7xl mx-auto"></div>
      <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
              <p className="text-base leading-6 text-red-500 font-semibold uppercase">
                Echt vakmanschap
              </p>
              <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                3 tot 5 jaar garantie
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                U heeft standaard garantie op al onze werkzaamheden.
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                  Zo bieden wij voor binnen stucwerk 5 jaar garantie en voor
                  stucwerk dat buiten is verricht 3 jaar garantie.
                </p>
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                {" "}
                Op deze manier waarborgen we onze kwaliteit. Wij geven u
                deskundig advies, denken met u mee en maken úw wensen tot ónze
                uitdaging.
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                  Bovendien kunt u voor de levering van alle materialen bij ons
                  terecht. Onze jarenlange ervaring in de stucadoorsbranche
                  heeft ons geleerd te improviseren: problemen zijn er om
                  opgelost te worden!
                </p>
              </p>
              <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Vrijblijvende offerte
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      100% Garantie
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      24/7 Bereikbaar
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 dark:text-red-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      De leukste vakmannen
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
                    alt="1"
                  />
                  <img
                    className="rounded-lg shadow-lg w-40 md:w-64"
                    width="260"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
                    alt="2"
                  />
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    className="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
                    alt="3"
                  />
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://jrm.geniti.nl/wp-content/uploads/2021/01/JRM-Afbouw-Stellen-scaled.jpg"
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 p-4 flex justify-between">
        <div>
          <h4 className="mb-2 text-1xl md:text-xl text-red-600">
            WIJ WERKEN MET ENTHOUSIASME
          </h4>
          <h2 className="text-4xl mb-2 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-xl">
            Daarom kiezen voor JRM Afbouw
          </h2>
        </div>
        <div>
          <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-400 md:py-4 md:text-lg md:px-10">
            Meer over ons
          </button>
        </div>
      </div>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Dit zeggen klanten over JRM Afbouw
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Hier doen we het voor
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div>
              <div>
                <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                  <div className="flex">
                    <span className="bg-red-600 text-white font-medium rounded-full px-2 inline-block uppercase tracking-wide text-xs">
                      Stucen
                    </span>
                    <div className="ml-2 text-xs text-gray-600 font-semibold uppercase">
                      Spuiten
                    </div>
                  </div>
                  <p>
                    U wilt u wanden en plafonds voorzien van een nieuwe
                    verflaag? Denk dan eens aan het voordelig spuiten van
                    latexverf in plaats van rollen! Voor een strak resultaat
                  </p>
                  <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                    Albert Jan
                  </h4>
                  <div>
                    <span className="text-gray-900 font-semibold">100+</span>
                    <span className="ml-1 text-sm text-gray-600">m2</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                  <div className="flex">
                    <span className="bg-red-600 text-white font-medium rounded-full px-2 inline-block uppercase tracking-wide text-xs">
                      Stucen
                    </span>
                    <div className="ml-2 text-xs text-gray-600 font-semibold uppercase">
                      Spuiten
                    </div>
                  </div>
                  <p>
                    U wilt u wanden en plafonds voorzien van een nieuwe
                    verflaag? Denk dan eens aan het voordelig spuiten van
                    latexverf in plaats van rollen! Voor een strak resultaat
                  </p>
                  <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                    Albert Jan
                  </h4>
                  <div>
                    <span className="text-gray-900 font-semibold">100+</span>
                    <span className="ml-1 text-sm text-gray-600">m2</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                  <div className="flex">
                    <span className="bg-red-600 text-white font-medium rounded-full px-2 inline-block uppercase tracking-wide text-xs">
                      Stucen
                    </span>
                    <div className="ml-2 text-xs text-gray-600 font-semibold uppercase">
                      Spuiten
                    </div>
                  </div>
                  <p>
                    U wilt u wanden en plafonds voorzien van een nieuwe
                    verflaag? Denk dan eens aan het voordelig spuiten van
                    latexverf in plaats van rollen! Voor een strak resultaat
                  </p>
                  <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                    jan
                  </h4>
                  <div>
                    <span className="text-gray-900 font-semibold">100+</span>
                    <span className="ml-1 text-sm text-gray-600">m2</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <svg
                      className="h-4 w-4 ml-1 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogCards />

      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
              <div>{post.Content}</div>
            </a>
          </Link>
        ))}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
