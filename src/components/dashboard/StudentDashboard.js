import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/student/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCourses(response.data.enrolledCourses);
      setMeetings(response.data.upcomingMeetings);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch dashboard data");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      {/* Enrolled Courses Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="text-sm text-gray-500">
                <p>Instructor: {course.instructor.name}</p>
                <p>Schedule: {course.schedule}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Meetings Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Live Sessions</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {meetings.map((meeting) => (
            <div key={meeting._id} className="p-4 border-b last:border-b-0">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{meeting.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(meeting.startTime).toLocaleString()}
                  </p>
                </div>
                <a
                  href={meeting.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Join Meeting
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StudentDashboard;
