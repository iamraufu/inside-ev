import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 h-[75dvh]">
          <img
            src="/hero.jpg"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[75dvh] max-w-[1300px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Passion is Education and Academic Excellence
          </h1>
          <p className="text-base md:text-lg mb-8">
            Empowering students to pursue their dreams through diverse,
            high-quality courses that meet the demands of today’s evolving
            world.
          </p>
          <Link
            to={"/about"}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded font-semibold text-lg flex justify-center items-center gap-2"
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
                src="courses-1.jpg"
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
                    to={"/services"}
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
                src="courses-2.jpg"
                alt="University Campus"
                className="w-full lg:w-3/4 h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
