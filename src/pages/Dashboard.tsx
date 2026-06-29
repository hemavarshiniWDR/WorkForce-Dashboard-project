import { useCallback } from "react";
import "./Dashboard.css";

import KPICard from "../components/KPI/KPICard";
import LineChartCard from "../components/Charts/LineChartCard";
import AreaChartCard from "../components/Charts/AreaChartCard";
import PieChartCard from "../components/Charts/PieChartCard";
import DonutChartCard from "../components/Charts/DonutChartCard";

import DashboardFilters from "../components/DashboardFilters/DashboardFilters";
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import DepartmentSummary from "../components/DepartmentSummary/DepartmentSummary";

import useEmployeeSearch from "../hooks/useEmployeeSearch";
import useDashboardFilter from "../hooks/useDashboardFilter";
import useKPICalculator from "../hooks/useKPICalculator";

import { employees, departments,kpis } from "../data/mockData";

const Dashboard = () => {
  const {
    search,
    setSearch,
    filteredEmployees: searchedEmployees,
    searchRef,
  } = useEmployeeSearch(employees);

  const {
    department,
    setDepartment,
    location,
    setLocation,
    status,
    setStatus,
    filteredEmployees,
  } = useDashboardFilter(searchedEmployees);

  const {
    totalEmployees,
    activeEmployees,
    attritionRate,
    hiringRate,
    skillCoverage,
    employeeTrend,
    attritionTrend,
    activeTrend,
    hiringChart,
    skillChart,
  } = useKPICalculator(filteredEmployees);

  const refreshDashboard = useCallback(() => {
    window.location.reload();
  }, []);

  const resetFilters = useCallback(() => {
    setSearch("");
    setDepartment("");
    setLocation("");
    setStatus("");
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Workforce Analytics Dashboard</h1>

      <DashboardFilters
        search={search}
        searchRef={searchRef}
        department={department}
        location={location}
        status={status}
        onSearchChange={setSearch}
        onDepartmentChange={setDepartment}
        onLocationChange={setLocation}
        onStatusChange={setStatus}
        onRefresh={refreshDashboard}
        onReset={resetFilters}
      />

      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <KPICard
            key={kpi.id}
            title={kpi.title}
            value={
              kpi.title === "Total Employees"
                ? totalEmployees.toString()
                : kpi.title === "Attrition Rate"
                  ? `${attritionRate}%`
                  : kpi.title === "Hiring Rate"
                    ? `${hiringRate}%`
                    : kpi.title === "Skill Coverage"
                      ? `${skillCoverage}%`
                      : activeEmployees.toString()
            }
          >
            {kpi.title === "Total Employees" && (
              <LineChartCard data={employeeTrend} />
            )}
            {kpi.title === "Attrition Rate" && (
              <AreaChartCard data={attritionTrend} />
            )}
            {kpi.title === "Hiring Rate" && <PieChartCard data={hiringChart} />}
            {kpi.title === "Skill Coverage" && (
              <DonutChartCard data={skillChart} />
            )}
            {kpi.title === "Active Employees" && (
              <LineChartCard data={activeTrend} />
            )}
          </KPICard>
        ))}
      </div>

      <div className="dashboard-bottom">
        <EmployeeTable employees={filteredEmployees} />
        <DepartmentSummary departments={departments} />
      </div>
    </div>
  );
};

export default Dashboard;
