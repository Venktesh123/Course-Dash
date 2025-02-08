import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AttendanceCalendar.css"; // Custom styling for better UI

const attendanceData = [
  { date: "2025-02-07", status: "Present" },
  { date: "2025-02-08", status: "Present" },
];

const AttendanceCalendar = () => {
  const [date, setDate] = useState(new Date());

  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const record = attendanceData.find((r) => r.date === formattedDate);

    return record ? (
      <div className={`attendance-status ${record.status.toLowerCase()}`}>
        {record.status}
      </div>
    ) : null;
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-title">Attendance</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        className="custom-calendar"
      />
    </div>
  );
};

export default AttendanceCalendar;
