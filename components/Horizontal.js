import React from "react";

function Horizontal() {
  return (
    <div className="container my-12 w-screen">
      <div className="bg-blue-100 my-12 mx-auto px-2 py-5 md:px-6 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none w-screen">
        <article className="bg-white overflow-hidden whitespace-normal rounded-lg shadow-lg w-1/3 inline-block h-full">
          <a className="" href="#">
            <img
              alt="Placeholder"
              className="h-auto w-full"
              src="https://i.postimg.cc/sfShJ2zH/checklist-2077023-1280.jpg"
            />
          </a>

          <div className="rounded-lg z-50 bg-white relative -mt-2">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg font-bold">
                <a className="no-underline hover:underline text-black" href="#">
                  Retos
                </a>
              </h1>
              <p className="text-grey-darker text-xs">DD/MM/YYYY</p>
            </header>

            <p className="flex items-center justify-between leading-tight px-2 pb-2 md:px-4 md:pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </article>

        <article className="bg-white overflow-hidden whitespace-normal rounded-lg shadow-lg w-1/3 ml-5 inline-block h-full">
          <a className="" href="#">
            <img
              alt="Placeholder"
              className="h-auto w-full"
              src="https://i.postimg.cc/sfShJ2zH/checklist-2077023-1280.jpg"
            />
          </a>

          <div className="rounded-lg z-50 bg-white relative -mt-2">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg font-bold">
                <a className="no-underline hover:underline text-black" href="#">
                  Retos
                </a>
              </h1>
            </header>

            <p className="flex items-center justify-between leading-tight px-2 pb-2 md:px-4 md:pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="px-6 py-4 flex justify-center flex-wrap">
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #didacticode
              </span>
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #reto
              </span>
            </div>
          </div>
        </article>

        <acticle className="bg-white overflow-hidden rounded-lg shadow-lg w-1/3 inline-block ml-5 whitespace-normal h-full">
          <img
            className="w-full"
            src="https://i.postimg.cc/sfShJ2zH/checklist-2077023-1280.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Colaboración</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center flex-wrap">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </acticle>

        <article className="overflow-hidden rounded-lg shadow-lg w-1/3 inline-block">
          <a href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="https://i.postimg.cc/sfShJ2zH/checklist-2077023-1280.jpg"
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Apoyo
              </a>
            </h1>
            <p className="text-grey-darker text-sm">DD/MM/YYYY</p>
          </header>

          <p className="flex items-center justify-between leading-tight p-2 md:p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>

        <article className="overflow-hidden rounded-lg shadow-lg w-1/3 inline-block">
          <a href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src="https://i.postimg.cc/sfShJ2zH/checklist-2077023-1280.jpg"
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Apoyo
              </a>
            </h1>
            <p className="text-grey-darker text-sm">DD/MM/YYYY</p>
          </header>

          <p className="flex items-center justify-between leading-tight p-2 md:p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Horizontal;
