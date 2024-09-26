import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Contact from "./Contact";

const Home = () => {
  const HoverCard = ({ image, title, description }) => {
    return (
      <div className="group relative w-70 h-70 bg-gray-200 overflow-hidden  shadow-lg cursor-pointer">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay (Shown on Hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
          <p className="text-white px-4">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 h-[75dvh]">
          <img
            src="/heroImage.jpg"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[75dvh] max-w-[1300px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl w-full font-bold mb-4">
              Our Passion is Education and Academic Excellence
            </h1>
            <p className="text-sm md:text-base mb-8 max-w-3xl">
              Empowering students to pursue their dreams through diverse,
              high-quality courses that meet the demands of today’s evolving
              world.
            </p>
          </div>
          <Link
            to={"/about"}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded font-semibold text-base flex justify-center items-center gap-2"
          >
            <p>Learn more </p>
            <GoArrowRight className="h-7 w-7" />
          </Link>
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
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-20 ">
            <div className="flex justify-center items-center">
              <img
                src="course1.png"
                alt="Courses"
                className="w-full lg:w-3/4 h-64 object-cover rounded"
              />
            </div>

            <div className="text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Our Courses?
              </h3>
              <p className="text-gray-600 text-sm mb-4  md:w-3/4 mx-auto">
                Our university provides a comprehensive selection of courses
                across various disciplines. Gain access to world-class
                education, experienced faculty, and cutting-edge research
                facilities.
              </p>
            </div>

            <div className="text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Our Services</h3>
              <p className="text-gray-600 text-sm mb-4 md:w-3/4  mx-auto">
                We offer personalized support for students, including academic
                counseling, career guidance, and access to industry partnerships
                for hands-on learning experiences.
              </p>
              <div>
                <button>
                  <Link
                    to={"/course"}
                    className="bg-yellow-500 mt-2 hover:bg-yellow-600 text-white py-2 px-5 text-base rounded font-semibold  flex justify-center items-center gap-2"
                  >
                    <p>Learn more </p>
                    <GoArrowRight className="h-6 w-6" />
                  </Link>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="course2.png"
                alt="University Campus"
                className="w-full lg:w-3/4 h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[50dvh]">
        <HoverCard
          image="https://via.placeholder.com/300"
          title="Our Passion"
          description="ABC Course"
        />
        <HoverCard
          image="https://via.placeholder.com/300"
          title="Our Passion"
          description="XYZ Course"
        />
        <HoverCard
          image="https://via.placeholder.com/300"
          title="Our Passion"
          description="SSS Course"
        />
      </div>
      <TestimonialsSlider />
      <Contact />
    </>
  );
};

export default Home;
