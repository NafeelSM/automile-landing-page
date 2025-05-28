"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, Settings, Compass, BarChart } from "lucide-react";

export default function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E3F2FD] via-[#BBDEFB] to-[#90CAF9]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experience Smarter Vehicle Management with AutoMile
          </h2>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Empower your vehicle journey with intelligent tracking, predictive
            maintenance, and real-time analytics.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-gray-800 shadow">
              <Compass className="h-12 w-12 mx-auto mb-4 text-[#1976D2]" />
              <h3 className="text-lg font-semibold mb-2">Real-Time GPS</h3>
              <p>
                Track vehicle movements using integrated GPS and ESP32 modules.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-gray-800 shadow">
              <Settings className="h-12 w-12 mx-auto mb-4 text-[#1976D2]" />
              <h3 className="text-lg font-semibold mb-2">
                Predictive Maintenance
              </h3>
              <p>
                Identify issues before they happen using IoT-based sensor data.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 text-gray-800 shadow">
              <BarChart className="h-12 w-12 mx-auto mb-4 text-[#1976D2]" />
              <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
              <p>
                Get actionable insights and recommendations from user data and
                reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Informed
          </h3>
          <p className="text-gray-800 mb-6">
            Get the latest updates, features, and development milestones from
            the AutoMile team.
          </p>

          {!isSubscribed ? (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1976D2] text-white font-semibold rounded-lg hover:bg-[#1565C0] transition-colors duration-300 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-gray-900">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm text-gray-700">
                You'll receive updates from the AutoMile team soon.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-gray-600 text-sm">
          <p>© 2025 AutoMile IOT Web Application - All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
