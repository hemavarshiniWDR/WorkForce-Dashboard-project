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
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>

                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>

                  <td>{employee.company?.department}</td>

                  <td>{employee.company?.title}</td>

                  <td>{employee.address?.city}</td>

                  <td>
                    <span
                      className={
                        employee.role === "admin"
                          ? "status-active"
                          : employee.role === "moderator"
                            ? "status-pending"
                            : "status-inactive"
                      }
                    >
                      {employee.role}
                    </span>
                  </td>
                </tr>
              ))}
              <div className="pagination">
                <button onClick={previousPage} disabled={currentPage === 1}>
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
