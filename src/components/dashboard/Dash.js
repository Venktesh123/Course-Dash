import React from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaLaptop,
  FaCalendarCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

const MyDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold text-green-700">
          Kalinga Institute
        </h2>
        <ul className="mt-4">
          <li className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </li>
          <li className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaBook className="mr-2" /> Courseware
          </li>
          <li className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaLaptop className="mr-2" /> E-Library
          </li>
          <li className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaCalendarCheck className="mr-2" /> My Attendance
          </li>
          <li className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer flex items-center">
            <FaChalkboardTeacher className="mr-2" /> My Live Class / Discussion
          </li>
        </ul>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">My Dashboard</h1>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">DEMO_STUDENT_KIIT_BBA</h3>
            <p className="text-gray-600">DEMO_STUDENT_KIIT_BBA@mailinator.in</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">BBA</h3>
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
      </div>
    </div>
  );
};

export default MyDashboard;
