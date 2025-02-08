import React, { useState } from "react";
import AttendanceCalendar from "./Attendence";
import CreateMeeting from "./CreateMeeting";
import {
  FaTachometerAlt,
  FaBook,
  FaLaptop,
  FaCalendarCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Courseware = ({ selectedSemester, setSelectedSemester }) => {
  const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];
  const courses = {
    "Semester 1": [
      "Fundamentals of Probability & Statistics 	XCT 1001	3	1	0	4",
      "Engineering Materials ",
      "Fluid Mechanics and Machineries ",
    ],
    "Semester 2": [
      "Mechanics of Solids",
      "Construction Planning, Control & Management",
      "Sustainable and Smart Construction Techniques",
    ],
    "Semester 3": [
      "Financial and Cost Accounting in Construction",
      "Construction Equipment, Plant and Machinery",
      "Quality Assurance and Control in Construction",
    ],
    "Semester 4": [
      "Pre-fabrication Construction Techniques",
      "Computer Applications in Construction ",
      "Entrepreneurship",
    ],
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Select a Semester</h1>
      <div className="grid grid-cols-2 gap-4">
        {semesters.map((semester, index) => (
          <button
            key={index}
            className={`p-3 text-white rounded-lg text-center shadow-md transition duration-300 ${
              selectedSemester === semester
                ? "bg-green-600"
                : "bg-green-500 hover:bg-green-700"
            }
            `}
            onClick={() => setSelectedSemester(semester)}
          >
            {semester}
          </button>
        ))}
      </div>
      {selectedSemester && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">
            Courses in {selectedSemester}
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {courses[selectedSemester].map((course, index) => (
              <li
                key={index}
                className="p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer transition"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [selectedSemester, setSelectedSemester] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold text-green-700">WILP Program</h2>
        <ul className="mt-4">
          <li
            className={`p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center ${
              activeSection === "Dashboard" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveSection("Dashboard")}
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </li>
          <li
            className={`p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center ${
              activeSection === "Courseware" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveSection("Courseware")}
          >
            <FaBook className="mr-2" /> Courseware
          </li>
          <li className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaLaptop className="mr-2" /> E-Library
          </li>
          <li
            className={`p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center ${
              activeSection === "Attendance" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveSection("Attendance")}
          >
            <FaCalendarCheck className="mr-2" /> My Attendance
          </li>
          <li
            className={`p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center ${
              activeSection === "LiveClass" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveSection("LiveClass")}
          >
            <FaChalkboardTeacher className="mr-2" /> My Live Class / Discussion
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeSection === "Dashboard" && (
          <>
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 shadow-md">
              <h1 className="text-xl font-semibold">My Dashboard</h1>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">DEMO_STUDENT_WILP P</h3>
                <p className="text-gray-600">
                  DEMO_STUDENT_WILP P@mailinator.in
                </p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold"></h3>
                <p className="text-gray-600">July-22</p>
                <p className="text-blue-500 cursor-pointer">
                  Batchmates: VIEW & CONNECT
                </p>
              </div>
            </div>

            {/* Course Progression */}
            <div className="bg-white p-4 shadow rounded mt-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Course Progression</h2>
                <select className="border p-1 rounded">
                  <option>Semester-1</option>
                </select>
              </div>
              <ul className="mt-2">
                {[
                  { name: "Managerial Written Communication", progress: "8%" },
                  { name: "Business Economics-I", progress: "6%" },
                  { name: "Financial Accounting", progress: "2%" },
                  { name: "Psychology", progress: "0%" },
                  { name: "Business Computing", progress: "6%" },
                  { name: "Basic Mathematics", progress: "4%" },
                  { name: "Simulated Case Studies", progress: "0%" },
                  { name: "Gamified Quiz", progress: "0%" },
                ].map((course, index) => (
                  <li key={index} className="flex justify-between border-b p-2">
                    <span>{course.name}</span>
                    <span>{course.progress}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Classes and Discussions */}
            <div className="bg-white p-4 shadow rounded mt-4">
              <div className="flex space-x-4">
                <button className="border-b-2 border-green-500 text-green-700 pb-1">
                  LIVE CLASSES
                </button>
                <button className="text-gray-600">DISCUSSIONS</button>
              </div>
            </div>
          </>
        )}

        {activeSection === "Attendance" && <AttendanceCalendar />}
        {activeSection === "Courseware" && (
          <Courseware
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
          />
        )}
        {activeSection === "LiveClass" && <CreateMeeting />}
      </div>
    </div>
  );
};

export default Dashboard;
