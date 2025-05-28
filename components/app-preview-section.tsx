"use client";

import Image from "next/image";

export default function AppPreviewSection() {
  const screenshots = [
    {
      title: "Dashboard View",
      description:
        "An overview of vehicle status, maintenance alerts, and real-time analytics.",
      image: "preview/dashboard.jpeg",
      alt: "AutoMile Dashboard Preview",
    },
    {
      title: "Travel Forecast",
      description:
        "Forecasts the expected travel distance of the vehicle over time using historical movement data and time-series analysis.",
      image: "preview/forecast.jpeg",
      alt: "Travel Forecast Preview",
    },
    {
      title: "Real-Time Chatbot",
      description:
        "AI-powered assistant that answers vehicle-related queries and provides personalized maintenance advice.",
      image: "preview/chatbot.jpeg",
      alt: "Real-Time Chatbot Preview",
    },
    {
      title: "Auto Parts Recommender",
      description:
        "Suggests compatible vehicle parts based on sentiment analysis of user reviews and predicted needs.",
      image: "preview/parts-recommender.jpeg",
      alt: "Auto Parts Recommender Preview",
    },
  ];

  return (
    <section id="site-preview" className="py-20 px-10 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Site Preview
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore how AutoMile helps manage your vehicle through an
            intelligent, responsive interface.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl">
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  width={1920} // Replace with actual screenshot width
                  height={1080} // Replace with actual screenshot height
                  className="w-full h-auto object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">
                {screenshot.title}
              </h3>
              <p className="text-gray-700 max-w-md mx-auto">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
