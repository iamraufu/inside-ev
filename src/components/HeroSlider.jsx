'use client';

import { useState, useEffect } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from "react-router-dom";

const slides = [
  {
    image: '/heroImage.jpg',
    title: 'Our Passion is Education and Academic Excellence',
    text: 'Empowering students to pursue their dreams through diverse, high-quality courses that meet the demands of today’s evolving world.',
    link: '/about',
  },
  {
    image: '/heroImage2.jpg',
    title: 'Our Passion is Education and Academic Excellence',
    text: 'Empowering students to pursue their dreams through diverse, high-quality courses that meet the demands of today’s evolving world.',
    link: '/about',
  },
  {
    image: '/heroImage3.jpg',
    title: 'Our Passion is Education and Academic Excellence',
    text: 'Empowering students to pursue their dreams through diverse, high-quality courses that meet the demands of today’s evolving world.',
    link: '/about',
  },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }, [currentSlide]);
  
    const nextSlide = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 300);
    };
  
    return (
      <div className="relative bg-gray-800 overflow-hidden">
        {/* Slide Image */}
        <div className="absolute inset-0 h-[75dvh]">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
  
        {/* Slide Content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[75dvh] max-w-[1300px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl w-full font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <div className="w-24 my-4 bg-yellow-500 h-1.5 rounded-full"></div>
            <p className="text-sm md:text-base mb-8 max-w-3xl">
              {slides[currentSlide].text}
            </p>
          </div>
          <Link
            href={slides[currentSlide].link}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded font-semibold text-base flex justify-center items-center gap-2"
          >
            <p>Learn more </p>
            <GoArrowRight className="h-7 w-7" />
          </Link>
        </div>
  
        {/* Pagination Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-500'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  }
  
