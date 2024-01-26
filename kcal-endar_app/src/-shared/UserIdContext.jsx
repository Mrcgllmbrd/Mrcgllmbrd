// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState("");

  return (
    <UserContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUser deve essere utilizzato all'interno di UserProvider"
    );
  }
  return context;
};
