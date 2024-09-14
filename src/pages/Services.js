

const Services = () => {
  return (
    <div className="relative bg-gray-800">
    {/* Background Image */}
    <div className="absolute inset-0 h-[70dvh]">
      <img
        src="/services.jpg" 
        alt="Solar Panels"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[70dvh] max-w-[1300px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Our Services
      </h1>
      <p className="text-base md:text-lg mb-8 md:w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis doloremque nihil? Id necessitatibus.
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
  );
};

export default Services;
