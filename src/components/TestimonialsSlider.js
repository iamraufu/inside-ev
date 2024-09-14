import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const testimonials = [
  {
    name: 'John Doe',
    position: 'Software Engineer at XYZ Ltd.',
    message: 'The courses offered by the university have been instrumental in shaping my career.',
    image: 'https://robohash.org/1',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer at XYZ Ltd.',
    message: 'The courses offered by the university have been instrumental in shaping my career.',
    image: 'https://robohash.org/7',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer at XYZ Ltd.',
    message: 'The courses offered by the university have been instrumental in shaping my career.',
    image: 'https://robohash.org/8',
  },
  {
    name: 'Jane Smith',
    position: 'Project Manager at ABC Inc.',
    message: 'Excellent faculty and comprehensive curriculum made my learning experience worthwhile.',
    image: 'https://robohash.org/42',
  },
  // Add more testimonials as needed
];



// Custom Left Arrow Component
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-10 max-md:hidden bg-gray-300 text-white p-1 rounded-full hover:bg-gray-600"
      >
        <MdKeyboardArrowLeft />
      </button>
    );
  };
  
  // Custom Right Arrow Component
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 z-10 max-md:hidden bg-gray-300 text-white p-1 rounded-full hover:bg-gray-600"
      >
        <MdKeyboardArrowRight />
      </button>
    );
  };
  
const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,  // Use custom left arrow
    nextArrow: <CustomNextArrow />,  // Use custom right arrow
    arrows: true,
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">What Our Students Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border border-slate-300"
                />
                <p className="text-gray-700 mb-4 text-center text-sm italic">"{testimonial.message}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
