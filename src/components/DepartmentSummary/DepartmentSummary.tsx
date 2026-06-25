import "./DepartmentSummary.css";
import type { Department } from "../../models/Department";

interface DepartmentSummaryProps {
  departments: Department[];
}

const DepartmentSummary = ({ departments }: DepartmentSummaryProps) => {
  return (
    <div className="department-summary">
      <h2>Department Summary</h2>

      <div className="department-grid">
        {departments.map((department) => (
          <div key={department.id} className="department-card">
            <h3>{department.name}</h3>

            <p>{department.employees} Employees</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSummary;
