import React from "react";

const courses = [
  {
    name: "Business Economics-I",
    learningActivities: 89,
    assignments: 14,
    discussions: 4,
    liveClass: "No Live Class Scheduled",
    assessments: [],
  },
  {
    name: "Financial Accounting",
    learningActivities: 89,
    assignments: 14,
    discussions: 4,
    liveClass: "No Live Class Scheduled",
    assessments: [
      {
        dueDate: "30/12/2029",
        title: "Assignment 2",
        status: "Graded",
        duration: "50 Minutes",
        marks: 100,
      },
    ],
  },
  {
    name: "Psychology",
    learningActivities: 86,
    assignments: 14,
    discussions: 3,
    liveClass: "No Live Class Scheduled",
    assessments: [
      {
        dueDate: "30/12/2029",
        title: "Assignment 2",
        status: "Graded",
        duration: "50 Minutes",
        marks: 100,
      },
    ],
  },
];

const Sidebar = () => (
  <aside className="w-64 p-4 bg-gray-100 h-screen fixed">
    <h2 className="font-bold text-lg mb-4">Dashboard</h2>
    <nav>
      <ul className="space-y-2">
        <li className="font-semibold text-blue-600">Courseware</li>
        <li>Semester-1</li>
        <li>Semester-2</li>
        <li>Semester-3</li>
        <li>Semester-4</li>
        <li className="mt-4">E-Library</li>
        <li>My Attendance</li>
        <li>My Live Class / Discussion</li>
      </ul>
    </nav>
  </aside>
);

const CourseCard = ({ course }) => (
  <div className="border rounded-lg p-4 bg-white shadow-md">
    <h3 className="font-bold text-lg">{course.name}</h3>
    <div className="mt-2">
      <p className="text-blue-600 font-semibold">📚 Courseware</p>
      <p>{course.learningActivities} Learning Activity</p>
      <p>{course.assignments} Assignment</p>
      <p>{course.discussions} Discussion</p>
    </div>
    <div className="mt-2 bg-gray-100 p-2 rounded-lg">
      <p className="text-blue-600 font-semibold">📅 Live Class</p>
      <p className="text-gray-500">{course.liveClass}</p>
    </div>
    {course.assessments.length > 0 && (
      <div className="mt-2 bg-gray-100 p-2 rounded-lg">
        <p className="text-blue-600 font-semibold">📄 Continuous Assessment</p>
        {course.assessments.map((assess, index) => (
          <div key={index} className="mt-2">
            <p className="text-sm font-semibold">DUE DATE - {assess.dueDate}</p>
            <p>
              {assess.title}{" "}
              <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-xs">
                {assess.status}
              </span>
            </p>
            <p>
              Duration: {assess.duration} | {assess.marks} Marks
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Courseware = () => (
  <div className="ml-72 p-6">
    <h1 className="text-2xl font-bold">Semester 1</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  </div>
);

const CourseWare = () => (
  <div className="flex">
    <Sidebar />
    <Courseware />
  </div>
);

export default CourseWare;
