import React from 'react';

const PeaceOfMindBlock: React.FC = () => (
  <section
    style={{
      background: `linear-gradient(to bottom right, #f3f4f6 50%, white 50%)`,
    }}
    className="relative"
  >
    <div className="w-176 h-176 absolute bg-fuchsia-radial-gradient -left-96 -bottom-112" />
    <div className="w-176 h-176 absolute bg-fuchsia-radial-gradient -right-96" />
    <div className="lg:ml-10 flex justify-start py-8 items-center relative">
      <div className="lg:w-1/2 p-12 lg:pl-12 sm:pl-16 pl-8 pr-8">
        <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 w-12 h-12 rounded-lg flex justify-center items-center">
          <i aria-hidden className="fas fa-desktop text-white text-xl" />
        </div>
        <h2 className="text-5xl font-extrabold font-inter mt-6">
          <span className="text-black">
            Peace of mind for{` `}
            <span className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              parents
            </span>
          </span>
        </h2>
        <p className="text-xl text-gray-500 my-5 leading-8">
          Gertrude lets you block the entire internet, only unlocking the portions you
          choose. Keep your kids <em>only</em> and <em>exactly</em> where you want them to
          be online. Plus, review screenshots and keystrokes of their activity from your
          own computer or phone. Early access available now for <em>Apple computers.</em>
        </p>
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 items-start sm:items-end">
          <a
            className="text-white font-extrabold text-xl bg-gradient-to-br w-[14.8rem] sm:w-auto from-violet-500 to-fuchsia-500 px-8 py-3 rounded-xl shadow-xl mt-3 hover:from-violet-600 hover:to-fuchsia-600 inline-flex items-center"
            href="https://dash.gertrude.app/signup"
          >
            <i aria-hidden className="fas fa-rocket mr-4" />
            <h2 className="whitespace-nowrap">Get started</h2>
          </a>
          <a
            className="font-extrabold text-xl bg-white px-8 py-3 rounded-xl shadow-xl mt-3 hover:from-violet-600 hover:to-fuchsia-600 inline-flex items-center hover:bg-violet-50 transition duration-100 border-[0.5px]"
            href="/docs"
          >
            <h2 className="bg-gradient-to-br from-indigo-500 flex items-center to-fuchsia-500 bg-clip-text text-transparent">
              <i aria-hidden className="fas fa-book mr-4" />
              <span className="whitespace-nowrap">Read the docs</span>
            </h2>
          </a>
        </div>
      </div>
      <div className="w-1/2 h-112 bg-fuchsia-radial-gradient z-10 p-8 justify-center items-center lg:flex hidden">
        <div className="w-96 h-96 bg-white rounded-full shadow-xl overflow-hidden flex justify-center items-center">
          <i
            aria-hidden
            className="fa fa-lock text-9xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent scale-125"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PeaceOfMindBlock;
