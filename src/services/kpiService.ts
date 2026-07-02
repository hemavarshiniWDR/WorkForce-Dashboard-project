import { fetchEmployees } from "./employeeService";

export const fetchKPIs = async () => {
  const employees = await fetchEmployees();

  return {
    totalEmployees: employees.length,

    activeEmployees: employees.length - 5,

    inactiveEmployees: 5,

    attritionRate: "12%",

    hiringRate: "8%",

    skillCoverage: "91%",
  };
};
