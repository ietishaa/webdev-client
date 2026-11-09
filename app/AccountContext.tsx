"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
};

type AccountContextType = {
  currentUser: User | null;
  setCurrentUser: (u: User | null) => void;
};

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccountContext must be used within AccountProvider");
  return ctx;
}