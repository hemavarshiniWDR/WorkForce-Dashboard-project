import { useQuery } from "@tanstack/react-query";
import { fetchKPIs } from "../services/kpiService";

const useKPIs = () => {
  return useQuery({
    queryKey: ["kpis"],

    queryFn: fetchKPIs,

    staleTime: 1000 * 60 * 5,

    retry: 2,
  });
};

export default useKPIs;
