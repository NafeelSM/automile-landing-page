import React from "react";

type Member = {
  name: string;
  role: string;
  department: string;
  email: string;
  image: string;
};

type CardProps = {
  name: string;
  image: string;
  role: string;
  department: string;
  email: string;
};

const Card: React.FC<CardProps> = ({
  name,
  image,
  role,
  department,
  email,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300 min-h-full flex flex-col items-center sm:w-full w-fit">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 mb-4 rounded-full object-cover"
    />
    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
    <p className="text-sm text-gray-700 mt-2 font-[450]">{role}</p>
    <p className="text-sm text-gray-500 mt-1 whitespace-pre-line">
      {department}
    </p>
    <a
      href={`mailto:${email}`}
      className="text-sm text-blue-600 mt-2 hover:underline"
    >
      {email}
    </a>
  </div>
);

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "S.M. Nafeel",
      role: "Accurate Track & Log",
      department:
        "Department of Information Technology\nSri Lanka Institute of Information Technology\nMalabe, Sri Lanka",
      email: "it21173554@my.sliit.lk",
      image: "/team/nfl.jpg",
    },
    {
      name: "H.M. Shukri",
      role: "Predictive Maintenance",
      department:
        "Department of Information Technology\nSri Lanka Institute of Information Technology\nMalabe, Sri Lanka",
      email: "it21263026@my.sliit.lk",
      image: "/team/shukri.jpg",
    },
    {
      name: "M.I. Ahlan",
      role: "Smart Chatbot",
      department:
        "Department of Information Technology\nSri Lanka Institute of Information Technology\nMalabe, Sri Lanka",
      email: "it21296550@my.sliit.lk",
      image: "/team/ahlan.png",
    },
    {
      name: "G.P.D.P. Nanayakara",
      role: "Parts Recommendation",
      department:
        "Department of Information Technology\nSri Lanka Institute of Information Technology\nMalabe, Sri Lanka",
      email: "it21159862@my.sliit.lk",
      image: "/team/dilshan.jpg",
    },
  ];

  const academicStaff: Member[] = [
    {
      name: "Mr. Nelum Chathuranga",
      role: "Supervisor",
      department:
        "Department of Information Technology\nSri Lanka Institute of Information Technology\nMalabe, Sri Lanka",
      email: "nelum.a@sliit.lk",
      image: "/team/supervisor.jpg",
    },
    {
      name: "Ms. Akshi De Silva",
      role: "Co-Supervisor",
      department:
        "Department of Information Technology\nSri Lanka Institute of Information Technology\nMalabe, Sri Lanka",
      email: "akshi.d@sliit.lk",
      image: "/team/cosupervisor.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#D0E8FF] to-[#A1C4FD]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate team behind AutoMile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Student Team */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Student Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {teamMembers.map((member, index) => (
                <Card key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Academic Staff */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Academic Guidance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {academicStaff.map((staff, index) => (
                <Card key={index} {...staff} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
