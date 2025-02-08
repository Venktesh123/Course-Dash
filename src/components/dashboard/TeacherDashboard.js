import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as lectureService from "../../services/lecture.service";

const TeacherDashboard = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await lectureService.getTeacherLectures();
        setLectures(response.data.lectures);
      } catch (err) {
        setError("Failed to fetch lectures");
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
        <Link
          to="/lecture/upload"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Upload New Lecture
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Lectures</h2>
        {lectures.length === 0 ? (
          <p className="text-gray-500">No lectures uploaded yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lectures.map((lecture) => (
              <div
                key={lecture._id}
                className="bg-white border rounded-lg overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {lecture.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {lecture.description.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Duration: {lecture.duration}</span>
                    <Link
                      to={`/lecture/${lecture._id}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TeacherDashboard;
