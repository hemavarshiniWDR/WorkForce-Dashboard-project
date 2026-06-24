import KPICard from "../components/KPI/KPICard";

const Dashboard = () => {
  return (
    <>
      <h1>Workforce Analytics Dashboard</h1>

      <div className="kpi-grid">
        <KPICard title="Employees" value="1250" />

        <KPICard title="Attrition" value="12%" />

        <KPICard title="Hiring Rate" value="8%" />

        <KPICard title="Skill Coverage" value="91%" />
      </div>
    </>
  );
};

export default Dashboard;
