import { useMemo, useState } from "react";

const useDashboardFilter = (employees: any[]) => {
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee: any) => {
      return (
        (department === "" || employee.company?.department === department) &&
        (location === "" || employee.address?.city === location) &&
        (status === "" || employee.role === status)
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
