import "./EmployeeTable.css";
import type { Employee } from "../../models/Employee";
import usePagination from "../../hooks/usePagination";

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  
    const { currentData, currentPage, totalPages, nextPage, previousPage } =
      usePagination(employees, 5);
  return (
    <>
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
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.experience} Years</td>
                  <td>{employee.skill}</td>
                  <td>{employee.location}</td>
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
            <div className="pagination">
              <button onClick={previousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
