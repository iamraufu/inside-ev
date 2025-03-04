import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import toast, { Toaster } from "react-hot-toast";
import trainingSessionimage from '../images/trainingSessionImage.png'
const Services = () => {
  const objectives = [
    {
      title: "Off-grid and On-grid Planning",
      description:
        "Learn about system planning with components like photovoltaics.",
    },
    {
      title: "Electric Power Storage Systems",
      description: "Explore various technologies for efficient power storage.",
    },
    {
      title: "Microgrids for Power Transmission",
      description:
        "Understand the crucial role microgrids play in modern systems.",
    },
    {
      title: "Grid-connected Systems",
      description:
        "Discover key components like photovoltaics, inverters, and storage systems.",
    },
    {
      title: "Hands-on Training",
      description:
        "Get hands-on experience with PVsol, Homer-Pro, 2D, and 3D modeling.",
    },
  ];

  const microgridTopics = [
    {
      title: "What is a Microgrid System?",
      description:
        "Understand the concept, structure, and importance of microgrid systems in decentralized energy production and distribution.",
    },
    {
      title: "How to Design a Microgrid System",
      description:
        "Learn the step-by-step process of designing a microgrid, from identifying energy needs to integrating energy resources.",
    },
    {
      title: "Technical and Economic Parameters",
      description:
        "Explore the critical technical and economic factors that must be considered when planning and implementing a microgrid, including energy capacity, load profiles, cost analysis, and system efficiency. ",
    },
    {
      title: "Coordination of Distributed Energy Resources",
      description:
        "Discover how to manage and coordinate various DERs such as solar, wind, and battery storage within a microgrid.",
    },
  ];

  const trainers = [
    {
      name: "Saiful Islam",
      image: "/trainers/trainer1.png", // Replace with the actual image URL
      shortInfo:
        "PhD student at Otto-von-Guericke-University with experience in renewable energy systems and AI.",
      detailsLink: "#", // Link to more details about the trainer
    },
    {
      name: "Talha Ahmad",
      image: "/trainers/trainer2.png", // Replace with the actual image URL
      shortInfo:
        "Industrial Professional with expertise in domains of electrical power engineering & renewable energies",
      detailsLink: "#", // Link to more details about the trainer
    },
    // Add more trainers as needed
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("All fields are required.");
      return;
    }
    try {
      // Add form data to Firestore
      await addDoc(collection(db, "register"), { ...formData, date: new Date(), type: "register" });
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to send message, please try again.");
    }
  };

  

  const members = [
    {
      id: "1",
      name: "Prof. Dr. Michael Hartmann",
      image: "/members/member1.png",
      shortInfo: "Academic Director of SRH University of Applied Sciences, Heidelberg; Department of School of Technology and Architecture (TEAC)",
      designation: "Geschäftsführender Vorstand"
    },
    {
      id: "4",
      name: "Dr. Klaus-Ulrich Neumann",
      image: "",
      shortInfo: "Expert in environmental technology and renewable energy systems.",
      designation: "Kuratorium"
    },
    {
      id: "7",
      name: "Dr. h.c. Hinrich Enderlein",
      image: "",
      shortInfo: "Vorsitzender",
      designation: "Kuratorium"
    },
    {
      id: "12",
      name: "Dr.-Ing. Jules Bertrand Njinkeu",
      image: "",
      shortInfo: "",
      designation: "Vorstand"
    },
  ];

  
    const trainingImages = [
      {
        src: trainingSessionimage,
        alt: 'training session',
        title: 'training session',
      },
    ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-800">
        <Toaster position="top-right" reverseOrder={false} />
        {/* Background Image */}
        <div className="absolute inset-0 h-[70dvh]">
          <img
            src="/renewableEnergy.jpg"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[70dvh] max-w-[1300px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Course Overview: Renewable Energy Systems and Applications
          </h1>
          <div className="w-24 my-4 bg-amber-500 h-1.5 rounded-full"></div>
          <p className="text-sm md:text-base mb-8 md:w-2/3">
            Electricity is a vital element in our daily lives, and renewable
            energy plays a crucial role in addressing the scarcity of
            electricity, especially in areas with unstable local electricity
            supply. Our short course is designed to equip trainees with a solid
            understanding of renewable energy concepts, their practical
            applications, and how to design and implement energy systems
            effectively.
          </p>
        </div>
      </div>

      {/* Course Outline Section */}
      <div className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Course Objectives
          <div className="w-24 mt-4 bg-emerald-500 h-1.5 mx-auto rounded-full"></div>
        </h2>

        <p className=" mt-4 mb-8 max-w-[1300px] mx-auto text-gray-900 text-center">
          By the end of this course, participants will have gained the skills
          and knowledge necessary to design, simulate, and implement renewable
          energy systems, making a positive impact on electricity supply and
          energy efficiency. This course will cover key aspects of renewable
          energy and help participants achieve the following objectives:
        </p>

        <div className="max-w-[1300px] mx-auto flex justify-center  flex-wrap gap-8">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 shadow rounded w-[400px]  border-t-4 border-emerald-500 hover:bg-gray-100 transition duration-300 transform hover:-translate-y-2 cursor-pointer">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Microgrids Section */}
      <div className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Microgrids for Electric Power Transmission
          <div className="w-24 mt-4 rounded-full bg-amber-500 h-1.5 mx-auto"></div>
        </h2>

        <p className="mt-4 mb-8 text-gray-800 text-center">
          In this part of the course, participants will gain comprehensive
          knowledge about microgrid systems and their importance in modern
          electric power transmission.
        </p>

        <div className="max-w-[1300px] mx-auto flex justify-center flex-wrap gap-8">
          {microgridTopics.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg w-[400px] transition duration-300 transform hover:-translate-y-2 cursor-pointer border-t-4 border-amber-500"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* training session */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center">Training Session</h3>
          <div className="w-16 my-4 bg-amber-400 h-2 rounded-full mx-auto"></div>
          <p className="italic text-center text-gray-700 mb-6">
            Here are a few pictures from the training session, captured by the instructors during their practical work.
          </p>
          <div className="grid grid-cols-1  gap-6">
            {trainingImages.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  // width={400}
                  // height={300}
                  className="rounded shadow-lg mx-auto"
                />
                {/* <p className="mt-4 text-sm text-gray-600 font-semibold">{image.title}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-8 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold my-2 text-center">
          Trainer Information
        </h2>
        <div className="w-24 my-6 bg-amber-500 h-1.5 rounded-full mx-auto"></div>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 shadow rounded-lg w-[400px] text-center"
            >
              <img
              src={trainer.image}
              alt={`${trainer.name}`}
              className=" w-1/2  rounded-full object-cover mx-auto border-2 border-amber-100 mb-5"
              />
              <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
              <p className="mb-4 text-sm italic opacity-75">{trainer.shortInfo}</p>
              <Link
                to="/about"
                className="inline-block bg-amber-500 text-white font-medium px-4 py-2 rounded hover:bg-amber-400 transition duration-300 mt-4"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold my-4 mt-8 text-center">Members</h2>
        <div className="w-24 my-4 bg-amber-500 h-1.5 rounded-full mx-auto"></div>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center mb-10 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 shadow rounded-lg w-[250px] text-center"
            >
              {
                member?.image &&
              <img
              src={member.image}
              alt={`${member.name}`}
              className=" w-1/2  rounded-full object-cover mx-auto border-2 border-amber-100 mb-5"
              />
            }
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <small className="text-sm">{member.designation}</small>
              <p className="mb-4 text-sm italic opacity-75">{member.shortInfo}</p>
            </div>
          ))}
        </div>

      </div>

      {/* contact */}
      <div
        id="contact"
        className="flex items-center justify-center min-h-[60dvh] bg-white "
      >
        <div className="w-full px-6 pb-10 rounded max-w-[1100px] mx-auto">
          <h1 className="text-3xl font-semibold text-center text-black">
            Contact Us
          </h1>
          <div className="w-24 my-4 bg-amber-500 h-2 rounded-full mx-auto mb-8"></div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1  text-sm gap-6">
              <div className="col-span-1">
                <label
                  className="block text-black font-semibold mb-2"
                  htmlFor="name"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  className="block text-black font-semibold mb-2"
                  htmlFor="email"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-6 ">
              <button
                className="px-8 py-3 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;
