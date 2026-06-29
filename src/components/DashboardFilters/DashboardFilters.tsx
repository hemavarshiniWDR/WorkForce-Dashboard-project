import "./DashboardFilters.css";

interface DashboardFiltersProps {
  search: string;
  searchRef: React.RefObject<HTMLInputElement | null>;
  department: string;
  location: string;
  status: string;
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onRefresh: () => void;
  onReset: () => void;
}

const DashboardFilters = ({
  search,
  searchRef,
  department,
  location,
  status,
  onSearchChange,
  onDepartmentChange,
  onLocationChange,
  onStatusChange,
  onRefresh,
  onReset,
}: DashboardFiltersProps) => {
  
  return (
    <div className="dashboard-filters">
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        ref={searchRef}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => onDepartmentChange(e.target.value)}
      >
        <option value="">Department</option>
        <option>IT</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Sales</option>
        <option>Marketing</option>
      </select>

      <select
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
      >
        <option value="">Location</option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
        <option>Coimbatore</option>
        <option>Delhi</option>
      </select>

      <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button onClick={onRefresh}>Refresh</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default DashboardFilters;
