import KPICard from "../components/KPI/KPICard";

import LineChartCard from "../components/Charts/LineChartCard";
import AreaChartCard from "../components/Charts/AreaChartCard";
import DonutChartCard from "../components/Charts/DonutChartCard";
import PieChartCard from "../components/Charts/PieChartCard";

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

const skillCoverageData = [
  { name: "Covered", value: 91 },
  { name: "Remaining", value: 9 },
];

const Dashboard = () => {
  return (
    <>
      <h1>Workforce Analytics Dashboard</h1>

      <div className="kpi-grid">
        <KPICard title="Total Employees" value="1250">
          <LineChartCard data={employeeData} />
        </KPICard>

        <KPICard title="Attrition Rate" value="12%">
          <AreaChartCard data={attritionData} />
        </KPICard>

        <KPICard title="Hiring Rate" value="8%">
          <PieChartCard data={hiringData} />
        </KPICard>

        <KPICard title="Skill Coverage" value="91%">
          <DonutChartCard data={skillCoverageData} />
        </KPICard>
      </div>
    </>
  );
};

export default Dashboard;
