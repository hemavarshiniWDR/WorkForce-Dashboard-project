import "./EmployeeTable.css";
import type { Employee } from "../../models/Employee";

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  return (
    <div className="employee-table-container">
      <h2>Employee Table</h2>
      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Experience</th>
              <th>Skill</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.department}</td>

                <td>{employee.designation}</td>

                <td>{employee.experience} Years</td>

                <td>{employee.skill}</td>

                <td>
                  <span
                    className={
                      employee.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
