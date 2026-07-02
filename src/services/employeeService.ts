import api from "./api";

export const fetchEmployees = async () => {
  const response = await api.get("/users");

  return response.data.users;
};
