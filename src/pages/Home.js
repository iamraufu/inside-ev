import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Contact from "./Contact";
import logo from '../images/logo.png'
import cetificateIE from '../images/cetificateIE.png'
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  // const HoverCard = ({ image, title, description }) => {
  //   return (
  //     <div className="group relative w-70 h-70 bg-gray-200 overflow-hidden  shadow-lg cursor-pointer">
  //       {/* Background Image */}
  //       <img
  //         src={image}
  //         alt={title}
  //         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  //       />

  //       {/* Overlay (Shown on Hover) */}
  //       <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  //         <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
  //         <p className="text-white px-4">{description}</p>
  //       </div>
  //     </div>
  //   );
  // };


  return (
    <>
      <HeroSlider />
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-20 ">
            <div className="flex justify-center items-center">
              <img
                // src="course1.png"
                src={logo}
                alt="Courses"
                className="w-[80%] object-cover rounded"
              />
            </div>

            <div className="text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold">
                Why Choose Our Courses?
              </h3>
              <div className="w-24 my-4 bg-amber-400 h-2 rounded-full mx-auto"></div>
              <p className="text-gray-600 text-sm mb-4  md:w-3/4 mx-auto">
                Our training provides a comprehensive selection of courses across various disciplines. Gain access to world-class education, experienced faculty, and cutting-edge research facilities. The trainers are certified by renowned institutions in their field and possess extensive expertise and experience in their respective domains.
              </p>
            </div>

            <div className="text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold">Our Services</h3>
              <div className="w-16 my-4 bg-amber-400 h-2 rounded-full mx-auto"></div>
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
                src={cetificateIE}
                alt="Courses"
                className="w-[60%] object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center min-h-[50dvh]">
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
      </div> */}
      <TestimonialsSlider />
      
      <Contact />
    </>
  );
};

export default Home;
