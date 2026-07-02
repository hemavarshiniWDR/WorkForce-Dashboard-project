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

import useEmployees from "../hooks/useEmployees";


const Dashboard = () => {
  // React Query API
  const { data: employees = [], isLoading, isError } = useEmployees();

  // Search
  const {
    search,
    setSearch,
    filteredEmployees: searchedEmployees,
    searchRef,
  } = useEmployeeSearch(employees);

  // Filters
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
    maleEmployees,
    femaleEmployees,
    departmentCount,
    averageAge,
    employeeTrend,
    ageTrend,
    genderChart,
    departmentChart,
  } = useKPICalculator(filteredEmployees);

  const refreshDashboard = useCallback(() => {
    window.location.reload();
  }, []);

  const resetFilters = useCallback(() => {
    setSearch("");
    setDepartment("");
    setLocation("");
    setStatus("");
  }, [setSearch, setDepartment, setLocation, setStatus]);


  const departments = [
    ...new Set(employees.map((emp: any) => emp.company?.department)),
  ] as string[];

  const locations = [
    ...new Set(employees.map((emp: any) => emp.address?.city)),
  ] as string[];

  const roles = [...new Set(employees.map((emp: any) => emp.role))] as string[];

  if (isLoading) {
    return (
      <div className="dashboard">
        <h2>Loading Employees...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="dashboard">
        <h2>Failed to load employee data.</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Workforce Analytics Dashboard</h1>

      <DashboardFilters
        search={search}
        searchRef={searchRef}
        department={department}
        location={location}
        status={status}
        departments={departments}
        locations={locations}
        roles={roles}
        onSearchChange={setSearch}
        onDepartmentChange={setDepartment}
        onLocationChange={setLocation}
        onStatusChange={setStatus}
        onRefresh={refreshDashboard}
        onReset={resetFilters}
      />

      <div className="kpi-grid">
        <KPICard title="Total Employees" value={String(totalEmployees)}>
          <LineChartCard data={employeeTrend} />
        </KPICard>

        <KPICard title="Male Employees" value={String(maleEmployees)}>
          <AreaChartCard data={employeeTrend} />
        </KPICard>

        <KPICard title="Female Employees" value={String(femaleEmployees)}>
          <PieChartCard data={genderChart} />
        </KPICard>

        <KPICard title="Departments" value={String(departmentCount)}>
          <DonutChartCard data={departmentChart} />
        </KPICard>

        <KPICard title="Average Age" value={`${averageAge} Years`}>
          <LineChartCard data={ageTrend} />
        </KPICard>
      </div>

      <div className="dashboard-bottom">
        <EmployeeTable employees={filteredEmployees} />
        <DepartmentSummary employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default Dashboard;
