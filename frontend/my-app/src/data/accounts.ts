export type Account = {
  id: string;
  name: string;
  institution: string;
  type: "checking" | "savings" | "credit";
  balance: number;
};

export const accounts: Account[] = [
  {
    id: "1",
    name: "My Checking",
    institution: "Chase",
    type: "checking",
    balance: 2450.75,
  },
  {
    id: "2",
    name: "Savings Account",
    institution: "Wells Fargo",
    type: "savings",
    balance: 12000,
  },
];