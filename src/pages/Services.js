const Services = () => {
  // const courses = [
  //   {
  //     icon: "🎓", // Replace with an icon of your choice
  //     title: "Computer Science",
  //     description:
  //       "Learn algorithms, data structures, and programming languages.",
  //   },
  //   {
  //     icon: "📊",
  //     title: "Business Administration",
  //     description: "Master business strategies, management, and finance.",
  //   },
  //   {
  //     icon: "🔬",
  //     title: "Biology",
  //     description: "Explore the science of life and living organisms.",
  //   },
  //   {
  //     icon: "📖",
  //     title: "English Literature",
  //     description: "Dive into the world of classical and modern literature.",
  //   },
  //   {
  //     icon: "🧮",
  //     title: "Mathematics",
  //     description: "Study mathematical theories, calculus, and statistics.",
  //   },
  // ];
  return (
    <>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Overview: Renewable Energy Systems and Applications </h1>
          <p className="text-base md:text-lg mb-8 md:w-1/2">
          Electricity is a vital element in our daily lives, and renewable energy plays a crucial role in addressing the scarcity of electricity, especially in areas with unstable local electricity supply. Our short course is designed to equip trainees with a solid understanding of renewable energy concepts, their practical applications, and how to design and implement energy systems effectively. 
          </p>
        </div>

       
      </div>

      <div className="flex flex-col items-center py-16 px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">
         Course Outline
        </h2>
        <p>
        This course will cover key aspects of renewable energy and help participants achieve the following objectives: • Off-grid and on-grid system planning, including components like photovoltaics • Electric power storage systems, exploring various technologies • Microgrids for electric power transmission • Grid-connected systems, covering components such as photovoltaics, inverters, and energy storage systems • Hands-on training in simulation tools like PVsol and Homer-Pro, including 2D and 3D modeling By the end of this course, participants will have gained the skills and knowledge necessary to design, simulate, and implement renewable energy systems, making a positive impact on electricity supply and energy efficiency. Microgrids for Electric Power Transmission In this part of the course, participants will gain comprehensive knowledge about microgrid systems and their importance in modern electric power transmission. The following key topics will be covered: • What is a Microgrid System? Understand the concept, structure, and importance of microgrid systems in decentralized energy production and distribution. • How to Design a Microgrid (MG) System Learn the step-by-step process of designing a microgrid, from identifying energy needs to integrating energy resources. • Technical and Economic Parameters of an MG System Explore the critical technical and economic factors that must be considered when planning and implementing a microgrid, including energy capacity, load profiles, cost analysis, and system efficiency. • Coordination of Distributed Energy Resources (DERs) Discover how to efficiently manage and coordinate various distributed energy resources (DERs) such as solar, wind, and battery storage within a microgrid system, ensuring seamless operation and energy balance. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{course.icon}</div>{" "}
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Services;
