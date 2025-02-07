import React from "react";
import {
  Search,
  Home,
  BookOpen,
  Code,
  Award,
  MessageCircle,
  HelpCircle,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Settings,
  Maximize,
  Volume2,
} from "lucide-react";

const LearningPlatform = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4 border-b flex items-center gap-2">
          <img src="/api/placeholder/32/32" alt="LinkedIn" className="h-8" />
          <span className="font-semibold text-blue-600">Learning</span>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <nav className="px-4">
          {[
            { icon: Home, text: "Home" },
            { icon: BookOpen, text: "My Library" },
            { icon: Code, text: "Coding Practice" },
            { icon: Award, text: "Certifications" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.text}</span>
            </div>
          ))}
        </nav>

        <div className="px-4 mt-6">
          <h3 className="px-3 text-sm font-medium text-gray-500">
            Trending topics
          </h3>
          {[
            "Leadership and Management",
            "Artificial Intelligence",
            "Cybersecurity",
          ].map((topic, index) => (
            <div
              key={index}
              className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Video Player */}
        <div className="bg-gray-900 h-96 relative">
          <div className="absolute bottom-0 w-full p-4 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Negotiation Skills</h2>
              <div className="flex items-center gap-4">
                <span>28:44</span>
                <span>277,043 views</span>
              </div>
            </div>

            {/* Video Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SkipBack className="h-5 w-5 cursor-pointer" />
                <div className="p-2 bg-white rounded-full">
                  <Play className="h-5 w-5 text-gray-900" />
                </div>
                <SkipForward className="h-5 w-5 cursor-pointer" />
              </div>

              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-blue-500 rounded-full" />
              </div>

              <div className="flex items-center gap-4">
                <Volume2 className="h-5 w-5" />
                <Settings className="h-5 w-5" />
                <Maximize className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="p-4 border-b">
          <div className="flex gap-6">
            {["Overview", "Q&A", "Notebook", "Transcript"].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-medium ${
                  index === 0
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Transcript */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Why We Avoid Negotiating</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Enable interactive transcripts
              </span>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              1. It's not always part of the culture.
            </p>
            <p className="text-gray-700">
              2. Fear of confrontation or rejection.
            </p>
            <p className="text-gray-700">
              3. Lack of confidence in negotiation skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
