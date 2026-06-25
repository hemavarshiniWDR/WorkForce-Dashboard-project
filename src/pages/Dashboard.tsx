import "./Dashboard.css";
import KPICard from "../components/KPI/KPICard";
import LineChartCard from "../components/Charts/LineChartCard";
import AreaChartCard from "../components/Charts/AreaChartCard";
import PieChartCard from "../components/Charts/PieChartCard";
import DonutChartCard from "../components/Charts/DonutChartCard";

import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import DepartmentSummary from "../components/DepartmentSummary/DepartmentSummary";

import { employees, departments,kpis} from "../data/mockData";

 const employeeData = [
  { month: "Jan", value: 1050 },
  { month: "Feb", value: 1120 },
  { month: "Mar", value: 1380 },
  { month: "Apr", value: 1250 },
];

const attritionData = [
  { month: "Jan", value: 8 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 10 },
  { month: "Apr", value: 12 },
];

const hiringData = [
  { name: "Hired", value: 8 },
  { name: "Remaining", value: 92 },
];

const skillData = [
  { name: "Covered", value: 91 },
  { name: "Remaining", value: 9 },
];

const activeEmployeeTrend = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 19 },
  { month: "Mar", value: 16 },
  { month: "Apr", value: 17 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Workforce Analytics Dashboard</h1>

      <div className="kpi-grid">
        <KPICard title={kpis[0].title} value={kpis[0].value}>
          <LineChartCard data={employeeData} />
        </KPICard>

        <KPICard title={kpis[1].title} value={kpis[1].value}>
          <AreaChartCard data={attritionData} />
        </KPICard>

        <KPICard title={kpis[2].title} value={kpis[2].value}>
          <PieChartCard data={hiringData} />
        </KPICard>

        <KPICard title={kpis[3].title} value={kpis[3].value}>
          <DonutChartCard data={skillData} />
        </KPICard>

        <KPICard title={kpis[4].title} value={kpis[4].value}>
          <LineChartCard data={activeEmployeeTrend} />
        </KPICard>
      </div>

      <div className="dashboard-bottom">
        <EmployeeTable employees={employees} />

        <DepartmentSummary departments={departments} />
      </div>
    </div>
  );
};

export default Dashboard;