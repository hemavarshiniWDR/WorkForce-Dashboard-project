import { useMemo } from "react";
import type { Employee } from "../models/Employee";

const useKPICalculator = (employees: Employee[]) => {
  const totalEmployees = useMemo(() => employees.length, [employees]);

  const activeEmployees = useMemo(
    () => employees.filter((e) => e.status === "Active").length,
    [employees],
  );

  const inactiveEmployees = useMemo(
    () => employees.filter((e) => e.status === "Inactive").length,
    [employees],
  );

  const attritionRate = useMemo(() => {
    return totalEmployees
      ? ((inactiveEmployees / totalEmployees) * 100).toFixed(1)
      : "0";
  }, [inactiveEmployees, totalEmployees]);

  const hiringRate = useMemo(() => {
    return totalEmployees
      ? ((activeEmployees / totalEmployees) * 100).toFixed(1)
      : "0";
  }, [activeEmployees, totalEmployees]);

  const skillCoverage = "91";

  const employeeTrend = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr"];

    return months.map((month) => ({
      month,
      value: employees.filter((e) => e.month === month).length,
    }));
  }, [employees]);

  const attritionTrend = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr"];

    return months.map((month) => ({
      month,
      value: employees.filter(
        (e) => e.month === month && e.status === "Inactive",
      ).length,
    }));
  }, [employees]);

  const activeTrend = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr"];

    return months.map((month) => ({
      month,
      value: employees.filter((e) => e.month === month && e.status === "Active")
        .length,
    }));
  }, [employees]);

  const hiringChart = useMemo(
    () => [
      { name: "Hired", value: activeEmployees },
      { name: "Remaining", value: inactiveEmployees },
    ],
    [activeEmployees, inactiveEmployees],
  );

  const skillChart = useMemo(
    () => [
      { name: "Covered", value: Number(skillCoverage) },
      { name: "Remaining", value: 100 - Number(skillCoverage) },
    ],
    [],
  );

  return {
    totalEmployees,
    activeEmployees,
    inactiveEmployees,
    attritionRate,
    hiringRate,
    skillCoverage,
    hiringChart,
    skillChart,
    employeeTrend,
    attritionTrend,
    activeTrend,
  };
};

export default useKPICalculator;
