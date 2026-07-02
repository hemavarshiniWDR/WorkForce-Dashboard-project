import { useMemo } from "react";

const useKPICalculator = (employees: any[]) => {
  // Total Employees
  const totalEmployees = useMemo(() => employees.length, [employees]);

  // Male Employees
  const maleEmployees = useMemo(
    () => employees.filter((emp) => emp.gender === "male").length,
    [employees],
  );

  // Female Employees
  const femaleEmployees = useMemo(
    () => employees.filter((emp) => emp.gender === "female").length,
    [employees],
  );

  // Departments Count
  const departmentCount = useMemo(() => {
    return new Set(employees.map((emp) => emp.company?.department)).size;
  }, [employees]);

  // Average Age
  const averageAge = useMemo(() => {
    if (employees.length === 0) return 0;

    const totalAge = employees.reduce((sum, emp) => sum + emp.age, 0);

    return Math.round(totalAge / employees.length);
  }, [employees]);

  // Employee Trend
  const employeeTrend = useMemo(
    () => [
      { month: "Jan", value: totalEmployees - 6 },
      { month: "Feb", value: totalEmployees - 4 },
      { month: "Mar", value: totalEmployees - 2 },
      { month: "Apr", value: totalEmployees },
    ],
    [totalEmployees],
  );

  // Average Age Trend
  const ageTrend = useMemo(
    () => [
      { month: "Jan", value: averageAge - 3 },
      { month: "Feb", value: averageAge - 2 },
      { month: "Mar", value: averageAge - 1 },
      { month: "Apr", value: averageAge },
    ],
    [averageAge],
  );

  // Gender Chart
  const genderChart = [
    {
      name: "Male",
      value: maleEmployees,
    },
    {
      name: "Female",
      value: femaleEmployees,
    },
  ];

  // Department Chart
  const departmentChart = [
    {
      name: "Departments",
      value: departmentCount,
    },
    {
      name: "Others",
      value: totalEmployees - departmentCount,
    },
  ];

  return {
    totalEmployees,

    maleEmployees,

    femaleEmployees,

    departmentCount,

    averageAge,

    employeeTrend,

    ageTrend,

    genderChart,

    departmentChart,
  };
};

export default useKPICalculator;
