import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";

interface User {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface UserInformation {
  about_me: string;
  github_url: string;
  linkedin_url: string;
}

interface UserContextData {
  user: User | null;
  signup: (user: User) => Promise<void>;
  handleUpdateAboutUser: (userInformation: UserInformation) => Promise<void>;
}

const UserContext = createContext({} as UserContextData);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  async function signup(user: User) {
    setUser(user);

    router.push("/dashboard");
  }

  async function handleUpdateAboutUser(userInformation: UserInformation) {
    setUser(previousState => {
      return {
        ...previousState,
        about_me: userInformation.about_me,
        linkedin_url: userInformation.linkedin_url,
        github_url: userInformation.github_url
      };
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        handleUpdateAboutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
