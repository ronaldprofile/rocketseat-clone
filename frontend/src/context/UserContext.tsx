import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useRouter } from "next/router";
import { api } from "../services/api";

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketseat_clone"));

    if (user) {
      api.get(`user/${user.id}`).then(response => {
        setUser(response.data);
      });
    }
  }, []);

  async function signup(user: User) {
    try {
      const { data: userData } = await api.post("signup", user);

      localStorage.setItem("@rocketseat_clone", JSON.stringify(userData));

      setUser(userData);
    } catch (error) {
      console.log(error);
    }

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
