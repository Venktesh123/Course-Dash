import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/layout/NavBar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TeacherDashboard from "./components/dashboard/TeacherDashboard";
import StudentDashboard from "./components/dashboard/StudentDashboard";
import LectureUpload from "./components/lectures/LectureUpload";
import LectureView from "./components/lectures/LectureView";
import LectureList from "./components/lectures/LectureList";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/teacher/dashboard"
                element={
                  <PrivateRoute roles={["teacher"]}>
                    <TeacherDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/student/dashboard"
                element={
                  <PrivateRoute roles={["student"]}>
                    <StudentDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/lecture/upload"
                element={
                  <PrivateRoute roles={["teacher"]}>
                    <LectureUpload />
                  </PrivateRoute>
                }
              />
              <Route
                path="/lecture/:id"
                element={
                  <PrivateRoute>
                    <LectureView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/lectures"
                element={
                  <PrivateRoute>
                    <LectureList />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
