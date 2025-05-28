import { Calendar, CheckCircle, Clock, Target } from "lucide-react";

export default function MilestonesSection() {
  const milestones = [
    {
      phase: "Milestone 1",
      title: "Project Proposal",
      date: "July 2024",
      description:
        "Initial documentation of project scope, objectives, and technologies.",
      status: "completed",
      icon: CheckCircle,
    },
    {
      phase: "Milestone 2",
      title: "Progress Presentation 1",
      date: "December 2024",
      description:
        "First round of presentation on research background, literature and methodologies.",
      status: "completed",
      icon: CheckCircle,
    },
    {
      phase: "Milestone 3",
      title: "Research Paper",
      date: "March 2025",
      description:
        "Submission of research paper for academic publication and review.",
      status: "completed",
      icon: CheckCircle,
    },
    {
      phase: "Milestone 4",
      title: "Progress Presentation 2",
      date: "March 2025",
      description:
        "Second presentation on development progress and implementation milestones.",
      status: "completed",
      icon: CheckCircle,
    },
    {
      phase: "Milestone 5",
      title: "Final Report",
      date: "April 2025",
      description:
        "Submission of complete final project documentation and findings.",
      status: "upcoming",
      icon: Target,
    },
    {
      phase: "Milestone 6",
      title: "Final Presentation & Viva",
      date: "May 2025",
      description:
        "Demonstration and oral defense of the final solution and report.",
      status: "in-progress",
      icon: Clock,
    },
    {
      phase: "Milestone 7",
      title: "Website Evaluation & Logbook Submission",
      date: "June 2025",
      description:
        "Final evaluation of the website, system demo and submission of individual logbooks.",
      status: "in-progress",
      icon: Clock,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in-progress":
        return "text-[#2196F3] bg-[#E3F2FD]";
      case "upcoming":
        return "text-gray-500 bg-gray-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <section
      id="milestones"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E3F2FD] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Project Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our journey from concept to completion
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2196F3] to-[#64B5F6]"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-[#2196F3] rounded-full z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-[#2196F3] bg-[#E3F2FD] px-3 py-1 rounded-full">
                          {milestone.phase}
                        </span>
                        <div
                          className={`p-2 rounded-full ${getStatusColor(
                            milestone.status
                          )}`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {milestone.title}
                      </h3>

                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{milestone.date}</span>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
