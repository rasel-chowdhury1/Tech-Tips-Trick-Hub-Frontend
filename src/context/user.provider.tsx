import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { IUser } from "../types";
import { getCurrentUser } from "../services/AuthServices";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  isSetLoading: Dispatch<SetStateAction<boolean>>;
}
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, isSetLoading] = useState(true);

  const handleUser = async () => {
    const currentUser = await getCurrentUser();
    console.log({currentUser})
    setUser(currentUser);
    isSetLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, isSetLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
