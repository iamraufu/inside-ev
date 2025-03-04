/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-600 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <div className="text-center md:text-left">
            {/* <p>Member of the training program</p>
            <p>University Name</p>
            <p>Copyright © Document prepared - MoU</p> */}
            <p>Inside e.V. retains full copyright authority over the website and all training programs offered on the platform</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Socials</Link>
            {/* <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a> */}
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saiful-islam-94a53a100" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            {/* <a target="_blank" rel="noreferrer" href="https://www.xing.com/" className="hover:text-gray-300">
              <FaXing size={24} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
