import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const testimonials = [
  {
    name: 'Seyed Hamid Seyed Hosseini',
    position: 'Master’s Student and working student at SRH University of Applied Sciences',
    message: 'I have attended the course In-Depth Knowledge of Renewable Power – Photovoltaics or Decentralized Energy Management Systems and found the content to be extremely insightful. The course inspired me to explore research in these topics. I also had the opportunity to learn alongside Saiful Islam and Muhammad Talha from Vattenfall, which further deepened my interest in energy management, technical design, and simulation in this field.',
    image: '',
  },
  {
    name: 'Suraj Shetty',
    position: 'Student, Engineering and Sustainable Technology Management - Mobility & Automotive Industry (Student at SRH University of Applied Sciences)',
    message: 'What I found most valuable was how Saiful Islam structured the Photovoltaics, Heating & Cooling elective to connect theoretical knowledge with practical implementation. I also had the invaluable opportunity to learn alongside Muhammad Talha from Vattenfall, which enhanced my understanding of practical industry applications and energy management systems. Mr. Saiful is supervising my thesis work, and he has guided me through specialized software tools like Homer and PVSOL. His expertise in these industry-standard applications has been crucial for my research and understanding of practical energy system design and analysis.',
    image: '',
  },
  {
    name: 'Pawan Premanand Balgi',
    position: 'Student, Engineering and Sustainable Technology Management - Mobility & Automotive Industry (Student at SRH University of Applied Sciences)',
    message: 'I have attended the course In-Depth Knowledge of Renewable Power – Photovoltaics or Decentralized Energy Management Systems and found the content to be extremely insightful. The course inspired me to explore research in these topics. I also had the opportunity to learn alongside Mr. Saiful Islam and Mr. Muhammad Talha from Vattenfall, which further deepened my interest in energy management, technical design, and simulation in this field. Additionally, I have completed my internship at Meloon GmbH in Design and Monitoring of Pilot Plants in Berlin. The knowledge gained from this course has been valuable in enhancing my skills in design and simulation as well.',
    image: '',
  }
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">What Our Students Say</h2>
        <div className="w-24 my-4 bg-amber-500 h-1.5 rounded-full mx-auto"></div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img
                  //placeholder image added 
                  src="/user.svg"
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border "
                />
                
                <p className="text-gray-800 mb-4 text-center text-sm italic">"{testimonial.message}"</p>
                <p className="font-semibold mb-1 text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-sm text-center">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
