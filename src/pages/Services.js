const Services = () => {
  const courses = [
    {
      icon: "🎓", // Replace with an icon of your choice
      title: "Computer Science",
      description:
        "Learn algorithms, data structures, and programming languages.",
    },
    {
      icon: "📊",
      title: "Business Administration",
      description: "Master business strategies, management, and finance.",
    },
    {
      icon: "🔬",
      title: "Biology",
      description: "Explore the science of life and living organisms.",
    },
    {
      icon: "📖",
      title: "English Literature",
      description: "Dive into the world of classical and modern literature.",
    },
    {
      icon: "🧮",
      title: "Mathematics",
      description: "Study mathematical theories, calculus, and statistics.",
    },
  ];
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-base md:text-lg mb-8 md:w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quis doloremque nihil? Id necessitatibus.
          </p>
        </div>

       
      </div>

      <div className="flex flex-col items-center py-16 px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Explore Our Online University Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{course.icon}</div>{" "}
              {/* You can replace the emojis with icons */}
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
