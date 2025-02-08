import React from "react";
import "./Meeting.css";

const subjectMeetings = [
  {
    subject: "Concrete Technology ",
    link: "https://meet.google.com/abc-defg-hij",
    time: "6:00 PM",
  },
  {
    subject: "Engineering Materials",
    link: "https://meet.google.com/klm-nopq-rst",
    time: "7:00 PM",
  },
  {
    subject: "Mechanics of Solids",
    link: "https://meet.google.com/uvw-xyzA-BCD",
    time: "8:00 PM",
  },
  {
    subject: "Quality Assurance and Control in Construction",
    link: "https://meet.google.com/zgo-tvwm-dxd",
    time: "7:00 PM",
  },
];

const SubjectMeeting = ({ subject, link, time }) => {
  return (
    <div className="meeting-card">
      <h2 className="meeting-title">{subject} Lecture</h2>
      <p className="meeting-time">
        <strong>Schedule:</strong> {time}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="meeting-button"
      >
        Join {subject} Lecture
      </a>
    </div>
  );
};

const CreateMeeting = () => {
  return (
    <div className="meeting-container">
      <h1 className="meeting-header">Subject-wise Google Meet Links</h1>
      <div className="meeting-grid">
        {subjectMeetings.map(({ subject, link, time }) => (
          <SubjectMeeting
            key={subject}
            subject={subject}
            link={link}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateMeeting;
