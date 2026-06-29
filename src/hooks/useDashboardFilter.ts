import { useMemo, useState } from "react";
import type { Employee } from "../models/Employee";

const useDashboardFilter = (employees: Employee[]) => {
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return (
        (department === "" || employee.department === department) &&
        (location === "" || employee.location === location) &&
        (status === "" || employee.status === status)
      );
    });
  }, [employees, department, location, status]);

  return {
    department,
    setDepartment,
    location,
    setLocation,
    status,
    setStatus,
    filteredEmployees,
  };
};

export default useDashboardFilter;
