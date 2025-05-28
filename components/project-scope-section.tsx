"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function ProjectScopeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Literature Survey",
      content: [
        "The integration of Internet of Things (IoT) and data-driven technologies is revolutionizing vehicle lifecycle management and maintenance in the automotive industry. Real-time data from sensors, GPS, and onboard diagnostics enables proactive strategies like IoT-enabled vehicle tracking, which improves route planning, operational efficiency, and security through continuous monitoring and real-time alerts. Predictive maintenance, powered by sensor data and machine learning, helps anticipate mechanical issues, reduce breakdowns, lower maintenance costs, and extend vehicle lifespan through timely servicing.",
        "Additionally, advanced systems like neural network-based advisors and conversational AI offer personalized maintenance insights by analyzing driving behavior and vehicle usage. Natural language processing and recommendation systems are also enhancing customer experience by suggesting compatible and high-performing auto parts based on user reviews and data analytics. Collectively, these technologies are transforming vehicles into smarter, more efficient assets and reshaping the way they are maintained and managed across their lifecycle.",
      ],
    },
    {
      title: "Research Gap",
      content: [
        "Existing vehicle tracking systems focus mainly on real-time location monitoring, with minimal integration of predictive analytics.",
        "Lack of solutions that combine IoT, machine learning, and NLP for a complete vehicle lifecycle management system.",
        "Most current systems do not support automated predictive maintenance based on real-time and historical sensor data.",
      ],
    },
    {
      title: "Solution",
      content: [
        "This project focuses on improving vehicle management using IoT and data analytics. It includes GPS tracking with ESP32, predictive maintenance scheduling, a smart chatbot for vehicle advice, and parts recommendations based on customer reviews. These features help reduce downtime, extend vehicle life, and support better decisions for vehicle owners.",
      ],
    },
    {
      title: "Research Objectives",
      content: [
        "Enhance vehicle lifecycle management by using IoT and AI technologies to optimize usage, reduce downtime, and provide personalized advice and parts recommendations.",
        "Sub-objectives include:",
        {
          list: [
            "Monitor vehicle movement in real time with ESP32 and GPS modules.",
            "Identify potential issues early using sensor data analytics.",
            "Get personalized vehicle advice using AI-powered conversation tools.",
            "Discover the best replacement parts based on real user reviews.",
          ],
        },
      ],
    },
    {
      title: "Methodology",
      content: [
        "This project uses IoT (ESP32 + GPS), cloud computing, and machine learning to track vehicles in real time, predict future movements (using ARIMA), and optimize maintenance. Data is sent to the cloud, analyzed, and visualized via maps and dashboards. NLP processes customer reviews to recommend parts, and ML models (using TensorFlow, Keras, TextBlob) predict maintenance needs. The system ensures accuracy through cross-validation and offers an all-in-one solution for smart vehicle lifecycle management.",
      ],
    },
    {
      title: "Technologies",
      content: [
        "The system is built using the following technologies:",
        {
          list: [
            "ESP32 + GPS Module – for real-time vehicle tracking via IoT.",
            "Random Forest Classifier – for predictive vehicle maintenance using sensor data.",
            "Neural Network – for AI-powered chatbot intent classification.",
            "TextBlob – for sentiment analysis to enhance auto part recommendations.",
          ],
        },
      ],
    },
  ];

  const renderContent = (content: (string | { list: string[] })[]) => {
    return content.map((item, idx) =>
      typeof item === "string" ? (
        <p key={idx} className="mb-4">
          {item}
        </p>
      ) : (
        <ul key={idx} className="list-disc pl-6 mb-4 text-gray-700">
          {item.list.map((point, i) => (
            <li key={i} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      )
    );
  };

  return (
    <section
      id="project-scope"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Project Scope
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive research and development approach behind
            AutoMile
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Desktop Tabs */}
          <div className="hidden md:flex border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "text-[#2196F3] border-b-2 border-[#2196F3] bg-[#E3F2FD]"
                    : "text-gray-600 hover:text-[#2196F3] hover:bg-[#E3F2FD]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-gray-800 hover:bg-[#E3F2FD] transition-colors"
                >
                  <span className="font-medium">{tab.title}</span>
                  {activeTab === index ? (
                    <ChevronDown className="h-5 w-5 text-[#2196F3]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {activeTab === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed text-base">
                    {renderContent(tab.content)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="hidden md:block p-8">
            <div className="text-gray-600 leading-relaxed text-lg">
              {renderContent(tabs[activeTab].content)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
