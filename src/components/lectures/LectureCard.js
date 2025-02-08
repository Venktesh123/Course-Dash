import React from "react";
import { Link } from "react-router-dom";

const LectureCard = ({ lecture }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          <Link
            to={`/lecture/${lecture._id}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            {lecture.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">
          {lecture.description.length > 150
            ? `${lecture.description.substring(0, 150)}...`
            : lecture.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>By {lecture.teacher.name}</span>
          <span>{lecture.duration}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {lecture.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/lecture/${lecture._id}`}
          className="block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Watch Lecture
        </Link>
      </div>
    </div>
  );
};
export default LectureCard;
