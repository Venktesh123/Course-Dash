import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as lectureService from "../../services/lecture.service";
import LectureCard from "./LectureCard";

const LectureList = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await lectureService.getAllLectures();
        setLectures(response.data.lectures);
      } catch (err) {
        setError("Failed to fetch lectures");
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  const filteredLectures = lectures.filter((lecture) => {
    const matchesSearch =
      lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecture.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecture.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (filter === "all") return matchesSearch;
    return matchesSearch && lecture.tags.includes(filter);
  });

  const uniqueTags = [...new Set(lectures.flatMap((lecture) => lecture.tags))];

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Available Lectures
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search lectures..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Categories</option>
            {uniqueTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {filteredLectures.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No lectures found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <LectureCard key={lecture._id} lecture={lecture} />
          ))}
        </div>
      )}
    </div>
  );
};
export default LectureList;
