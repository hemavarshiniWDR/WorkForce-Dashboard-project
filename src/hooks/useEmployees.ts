import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../services/employeeService";

const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],

    queryFn: fetchEmployees,

    staleTime: 1000 * 60 * 5,

    retry: 2,
  });
};

export default useEmployees;
