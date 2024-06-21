export interface Item {
  id: string;
  name: string;
  period: string;
  note: string;
  amount: number;
}

enum Role {
  ADMIN,
  USER,
}

export interface User {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  studentNumber: number;
  cohort: string;
}

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    studentNumber: number;
    cohort: string;
  }
}

declare module "next-auth/core/adapters" {
  type AdapterUser = User;
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    studentNumber: number;
    cohort: string;
  }
}
