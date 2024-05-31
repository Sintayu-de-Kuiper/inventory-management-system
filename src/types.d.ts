export interface Item {
  id: string;
  name: string;
  period: string;
  note: string;
  amount: number;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  studentNumber: number;
  cohort: string;
  passId: string;
}
