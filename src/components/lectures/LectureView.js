import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as lectureService from "../../services/lecture.service";
import { useAuth } from "../../context/AuthContext";

const LectureView = () => {
  const [lecture, setLecture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchLecture = async () => {
      try {
        const response = await lectureService.getLectureById(id);
        setLecture(response.data.lecture);
      } catch (err) {
        setError(err.response?.data?.message || "Error loading lecture");
      } finally {
        setLoading(false);
      }
    };

    fetchLecture();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );

  if (!lecture)
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center text-gray-600">Lecture not found</div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={lecture.videoUrl}
            title={lecture.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{lecture.title}</h1>
          <div className="flex items-center text-gray-600 mb-4 space-x-4">
            <span>By {lecture.teacher.name}</span>
            <span>Duration: {lecture.duration}</span>
          </div>
          <div className="prose max-w-none mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {lecture.description}
            </p>
          </div>
          {lecture.tags && lecture.tags.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {lecture.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LectureView;
