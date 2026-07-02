import "./DepartmentSummary.css"
interface Props {
  employees: any[];
}

const DepartmentSummary = ({ employees }: Props) => {
  const departmentCounts = employees.reduce(
    (acc: Record<string, number>, employee: any) => {
      const department = employee.company?.department;

      if (department) {
        acc[department] = (acc[department] || 0) + 1;
      }

      return acc;
    },
    {},
  );

  return (
    <div className="department-summary">
      <h2>Department Summary</h2>

      <div className="department-grid">
        {Object.entries(departmentCounts).map(([department, count]) => (
          <div key={department} className="department-card">
            <h3>{department}</h3>

            <p>{count} Employees</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSummary;
