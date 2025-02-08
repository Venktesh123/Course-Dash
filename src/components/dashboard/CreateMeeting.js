import React, { useState } from "react";
import { createMeeting, loginWithGoogle } from "./apiService";
import "./Meeting.css"; // Import the CSS

const CreateMeeting = () => {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [attendees, setAttendees] = useState("");
  const [meetingLink, setMeetingLink] = useState("");

  const handleCreateMeeting = async () => {
    const meetingDetails = {
      summary,
      description,
      startTime,
      endTime,
      attendees: attendees.split(",").map((email) => email.trim()),
    };

    try {
      const link = await createMeeting(meetingDetails);
      setMeetingLink(link);
    } catch (error) {
      alert("Failed to create meeting!");
    }
  };

  return (
    <div className="form-container">
      <h1>Create Google Meet</h1>
      <div className="form-group">
        <label>Summary:</label>
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Attendees (comma-separated emails):</label>
        <input
          type="text"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleCreateMeeting} className="submit-button">
        Create Meeting
      </button>

      {meetingLink && (
        <div className="meeting-link">
          <h2>Meeting Link:</h2>
          <a href={meetingLink} target="_blank" rel="noopener noreferrer">
            Join Meeting
          </a>
        </div>
      )}

      <button onClick={loginWithGoogle} className="google-login-button">
        Login with Google
      </button>
    </div>
  );
};

export default CreateMeeting;
