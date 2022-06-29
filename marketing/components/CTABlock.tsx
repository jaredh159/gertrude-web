import React from 'react';

const CTABlock: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-violet-500 to-fuchsia-500 flex justify-center items-center flex-col md:p-28 p-10 py-14 md:py-28">
        <h2 className="text-white text-opacity-70 text-4xl font-bold mb-5 text-center">
          Limited public beta begins{` `}
          <span className="text-white text-opacity-90 font-extrabold">
            November 1, 2022
          </span>
        </h2>
        <button
          className="text-white font-extrabold text-3xl bg-gray-800 px-10 py-4 rounded-xl shadow-xl mt-8 hover:bg-gray-900 transition duration-150 flex items-center"
          onClick={() => alert(`April fools`)}
        >
          <i className="fas fa-rocket mr-5" />
          <h2 className="leading-[90%]">Join the waitlist</h2>
        </button>
      </section>
      <footer className="p-7 border-t-2 border-white border-opacity-20 flex justify-center items-center bg-fuchsia-500">
        <p className="text-white text-opacity-50 text-xl">
          © {new Date().getFullYear()} NetRivet Inc.
        </p>
      </footer>
    </>
  );
};

export default CTABlock;
