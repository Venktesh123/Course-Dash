import api from "./api";

export const getAllLectures = async () => {
  const response = await api.get("/lectures");
  return response.data;
};

export const getLectureById = async (id) => {
  const response = await api.get(`/lectures/${id}`);
  return response.data;
};

export const createLecture = async (lectureData) => {
  const response = await api.post("/lectures", lectureData);
  return response.data;
};

export const getTeacherLectures = async () => {
  const response = await api.get("/lectures/teacher");
  return response.data;
};
