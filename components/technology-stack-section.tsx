import {
  Brain,
  Cpu,
  Database,
  Code,
  Zap,
  Settings,
  BarChart,
} from "lucide-react";

export default function TechnologyStackSection() {
  const technologies = [
    {
      name: "ESP32 + GPS Module",
      description: "Real-time vehicle tracking using embedded hardware",
      icon: Cpu,
      category: "IoT Hardware",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ARIMA",
      description: "Time-series based vehicle movement prediction",
      icon: BarChart,
      category: "Predictive Modeling",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Random Forest Classifier",
      description: "Predictive maintenance using sensor data",
      icon: Zap,
      category: "Machine Learning",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Neural Network",
      description: "Intent classification for chatbot queries",
      icon: Brain,
      category: "Deep Learning",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Flask + REST API",
      description: "Python-based backend for data flow and endpoints",
      icon: Database,
      category: "Backend",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "TextBlob + NLP",
      description: "Sentiment analysis of reviews for part suggestions",
      icon: Settings,
      category: "NLP & Recommendation",
      color: "from-orange-400 to-red-400",
    },
    {
      name: "Random Forest Regressor",
      description: "Personalized vehicle part recommendations",
      icon: BarChart,
      category: "ML Regression",
      color: "from-amber-400 to-yellow-500",
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable data processing with AWS & GCP",
      icon: Code,
      category: "Cloud Infrastructure",
      color: "from-sky-400 to-blue-600",
    },
  ];

  return (
    <section
      id="technology"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#BBDEFB] to-[#64B5F6]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technologies Used
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key technologies and frameworks powering the AutoMile platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-3">
                    {tech.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stats */}
        <div className="mt-16 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">96%</div>
              <div className="text-gray-600 font-medium">
                Maintenance Accuracy
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">97%</div>
              <div className="text-gray-600 font-medium">Chatbot Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">94%</div>
              <div className="text-gray-600 font-medium">
                Parts Suggestion Accuracy
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                4 Models
              </div>
              <div className="text-gray-600 font-medium">ML Pipelines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
