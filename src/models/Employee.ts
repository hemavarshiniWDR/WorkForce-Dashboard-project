export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  role: string;

  company: {
    department: string;
    title: string;
  };

  address: {
    city: string;
  };

  phone: string;
}
