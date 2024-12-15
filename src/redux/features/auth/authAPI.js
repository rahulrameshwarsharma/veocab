import apiClient from "../../../utils/apiClient";



export const loginAPI = async (credentials) => {
  const response = await apiClient.post("/admin/login", credentials);
  return response.data;
};

export const logoutAPI = async () => {
  const response = await apiClient.post("/auth/logout");
  return response.data;
};


export const getAdminProfile = async (credentials) => {
  const response = await apiClient.get("/admin/getprofile");
  return response.data;
};


export const getAllCounts = async (credentials) => {
  const response = await apiClient.get("/admin/allcount");
  return response.data;
};

export const getAllCarCounts = async (credentials) => {
  const response = await apiClient.get("/admin/carallcount");
  return response.data;
};


export const getAllCarCountsByMonthWise = async (credentials) => {
  const response = await apiClient.get("/admin/carallcount/by-month-wise");
  return response.data;
};


export const getAllTermAndCondition = async (credentials) => {
  const response = await apiClient.get("/admin/terms-and-conditions");
  return response.data;
};

export const getAllFAQs = async (credentials) => {
  const response = await apiClient.get("/admin/faqs");
  return response.data;
};


