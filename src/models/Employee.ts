export interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  experience: number;
  skill: string;
  location:string;
  month:string;
  status: "Active" | "Inactive";
}
