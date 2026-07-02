import { useQuery } from "@tanstack/react-query";
import { fetchDepartments } from "../services/departmentService";

const useDepartments = () => {
  return useQuery({
    queryKey: ["departments"],

    queryFn: fetchDepartments,

    staleTime: 1000 * 60 * 10,
  });
};

export default useDepartments;
