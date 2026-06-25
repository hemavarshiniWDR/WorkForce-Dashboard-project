export interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  experience: number;
  skill: string;
  status: "Active" | "Inactive";
}
