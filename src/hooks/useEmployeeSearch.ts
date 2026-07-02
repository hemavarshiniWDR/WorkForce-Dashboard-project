import { useMemo, useRef, useState, useEffect } from "react";

const useEmployeeSearch = (employees: any[]) => {
  const [search, setSearch] = useState("");

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;

      return (
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        employee.id.toString().includes(search)
      );
    });
  }, [employees, search]);

  return {
    search,

    setSearch,

    filteredEmployees,

    searchRef,
  };
};

export default useEmployeeSearch;
