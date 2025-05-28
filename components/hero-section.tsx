"use client";
import Image from "next/image";

export default function HeroSection() {
  const scrollToProjectScope = () => {
    const element = document.getElementById("project-scope");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E1F5FE] via-[#B3E5FC] to-[#81D4FA] opacity-90 z-0"></div>

      {/* Background Image */}
      <Image
        className="absolute inset-0 object-cover object-center w-full h-full opacity-20 z-10"
        src="bg.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#4FC3F7] to-[#0288D1] rounded-full opacity-20 blur-xl z-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#B3E5FC] to-[#4FC3F7] rounded-full opacity-20 blur-xl z-20"></div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Explore the Future of{" "}
          <span className="sm:whitespace-nowrap bg-gradient-to-r from-[#1565C0] to-[#0D47A1] bg-clip-text text-transparent">
            Smart Vehicle Management
          </span>{" "}
          with AutoMile
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
          IoT-powered insights for your intelligent driving experience.
        </p>

        <button
          onClick={scrollToProjectScope}
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] rounded-full hover:from-[#0288D1] hover:to-[#4FC3F7] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Explore More
        </button>
      </div>
    </section>
  );
}
