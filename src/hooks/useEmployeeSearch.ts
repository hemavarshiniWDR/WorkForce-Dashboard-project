import { useEffect, useRef, useState } from "react";
import type { Employee } from "../models/Employee";

const useEmployeeSearch = (employees: Employee[]) => {
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] =
    useState<Employee[]>(employees);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.id.toString().includes(search),
    );

    setFilteredEmployees(result);
  }, [search, employees]);

  return {
    search,
    setSearch,
    filteredEmployees,
    searchRef,
  };
};

export default useEmployeeSearch;
