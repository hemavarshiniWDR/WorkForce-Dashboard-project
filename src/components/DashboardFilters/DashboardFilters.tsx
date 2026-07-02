import "./DashboardFilters.css";

interface DashboardFiltersProps {
  search: string;
  searchRef: React.RefObject<HTMLInputElement | null>;

  department: string;
  location: string;
  status: string;

  departments: string[];
  locations: string[];
  roles: string[];

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

  departments,
  locations,
  roles,

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
        <option value="">All Departments</option>

        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
      >
        <option value="">All Locations</option>

        {locations.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">All Roles</option>

        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <button onClick={onRefresh}>Refresh</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default DashboardFilters;
