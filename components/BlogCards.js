import React from "react";
import { fromImageToUrl } from "../utils/urls";
import Link from "next/link";

export default function BlogCards() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://ninzio.com/byron/wp-content/uploads/2020/08/service-09.jpg"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Voor elke klus
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Stucwerk
                </h1>
                <p className="leading-relaxed mb-3">
                  Er zijn vele verschillende soorten stucwerk mogelijk. Zo kan
                  iedere denkbare kleur gebruikt worden. Er zijn verschillende
                  soorten reliëf mogelijk die in combinatie met kleurgebruik elk
                  voor een apart uiterlijk en sfeer in het huis zorgen.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/stucwerk">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Meer weten?
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://ninzio.com/byron/wp-content/uploads/2020/08/service-09.jpg"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Voor een strak resultaat
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Latex spuiten
                </h1>
                <p className="leading-relaxed mb-3">
                  De plafonds of wanden in de woning wilt u opnieuw laten
                  schilderen? Neem dan eens het spuiten van latexverf in
                  overweging in plaats van het ouderwetse schilderen. Latex
                  spuiten gaat tegenwoordig namelijk veel sneller.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href="/latex-spuiten">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Meer weten?{" "}
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://ninzio.com/byron/wp-content/uploads/2020/08/service-09.jpg"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Optimaliseer de ruimte
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Gipswanden
                </h1>
                <p className="leading-relaxed mb-3">
                  Bent u op zoek naar een oplossing voor die koude buitenmuur,
                  het creëren van extra kantoorruimte of een extra slaapkamer op
                  de zolder? Met een scheidingswand in de vorm van een metal
                  stud wand is dat een eenvoudige klus.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/gipswanden">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Meer weten?
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
