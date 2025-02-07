import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [meetingForm, setMeetingForm] = useState({
    title: "",
    startTime: "",
    duration: 60,
    courseId: "",
    description: "",
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/teacher/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCourses(response.data.teachingCourses);
      setMeetings(response.data.upcomingMeetings);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch dashboard data");
      setLoading(false);
    }
  };

  const handleMeetingFormChange = (e) => {
    setMeetingForm({
      ...meetingForm,
      [e.target.name]: e.target.value,
    });
  };

  const scheduleMeeting = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/meetings/schedule",
        meetingForm,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchDashboardData();
      setMeetingForm({
        title: "",
        startTime: "",
        duration: 60,
        courseId: "",
        description: "",
      });
      setShowMeetingForm(false);
    } catch (error) {
      setError("Failed to schedule meeting");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <button
          onClick={() => setShowMeetingForm(!showMeetingForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {showMeetingForm ? "Cancel" : "Schedule Meeting"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Meeting Scheduling Form */}
      {showMeetingForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Schedule New Meeting</h2>
          <form onSubmit={scheduleMeeting} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                name="courseId"
                value={meetingForm.courseId}
                onChange={handleMeetingFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Meeting Title
              </label>
              <input
                type="text"
                name="title"
                value={meetingForm.title}
                onChange={handleMeetingFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={meetingForm.description}
                onChange={handleMeetingFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="3"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  name="startTime"
                  value={meetingForm.startTime}
                  onChange={handleMeetingFormChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={meetingForm.duration}
                  onChange={handleMeetingFormChange}
                  min="15"
                  step="15"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Schedule Meeting
            </button>
          </form>
        </div>
      )}

      {/* Courses Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="text-sm text-gray-500">
                <p>Students: {course.enrolledStudents?.length || 0}</p>
                <p>Status: {course.isActive ? "Active" : "Inactive"}</p>
              </div>
              <button
                onClick={() => {
                  setMeetingForm((prev) => ({
                    ...prev,
                    courseId: course._id,
                  }));
                  setShowMeetingForm(true);
                }}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Schedule Class
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Meetings Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Live Sessions</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {meetings.length === 0 ? (
            <p className="p-4 text-gray-500">No upcoming meetings scheduled</p>
          ) : (
            meetings.map((meeting) => (
              <div key={meeting._id} className="p-4 border-b last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{meeting.title}</h3>
                    <p className="text-sm text-gray-500">
                      Course: {meeting.courseId.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(meeting.startTime).toLocaleString()} (
                      {meeting.duration} minutes)
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={meeting.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Join Meeting
                    </a>
                    <button
                      onClick={() => {
                        /* Add copy link functionality */
                      }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
