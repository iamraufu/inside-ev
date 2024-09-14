import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="relative bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 h-[75dvh]">
          <img
            src="/hero_new.jpg"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[75dvh] max-w-[1300px] mx-auto">
          <h1 className="text-3xl md:text-4xl w-full font-bold mb-4">
            Our Passion is Education and Academic Excellence
          </h1>
          <p className="text-sm md:text-base mb-8 max-w-3xl">
            Empowering students to pursue their dreams through diverse,
            high-quality courses that meet the demands of today’s evolving
            world.
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 w-full text-center">
          <svg
            className="w-6 h-6 mx-auto text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="mx-auto max-w-[1000px] px-8 py-24 space-y-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque
          mollitia iste et, culpa tenetur adipisci distinctio repellat quisquam
          est libero, explicabo ratione eveniet consequuntur. Facilis eum
          impedit ea quidem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque
          mollitia iste et, culpa tenetur adipisci distinctio repellat quisquam
          est libero, explicabo ratione eveniet consequuntur. Facilis eum
          impedit ea quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ipsa obcaecati cum quos assumenda debitis rem, dicta suscipit temporibus commodi, libero, fuga ipsam earum expedita. Tenetur quasi soluta quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque
          mollitia iste et, culpa tenetur adipisci distinctio repellat quisquam
          est libero, explicabo ratione eveniet consequuntur. Facilis eum
          impedit ea quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora, cumque, dolorum laborum quis ea possimus distinctio iure porro magni suscipit, quas hic sint aperiam deleniti sed eum laudantium autem!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
