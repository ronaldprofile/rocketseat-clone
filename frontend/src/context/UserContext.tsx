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

  about_me: string;
  avatar_url: string;
  github_url: string;
  linkedin_url: string;
  occupation: string;
  status: string;
  company: string;

  city: string;
  state: string;
  country: string;
}

interface UserProfileInformation {
  name: string;
  occupation: string;
  status: string;
  company: string;
  city: string;
  state: string;
  country: string;
}

interface UserContextData {
  user: User | null;
  signup: (user: User) => Promise<void>;
  handleUpdateProfileUser: (user: UserProfileInformation) => Promise<void>;
}

const UserContext = createContext({} as UserContextData);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>(null);
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("@rocketseat_clone"));

    if (userStorage) {
      api.get(`user/${userStorage.id}`).then(response => {
        setUser(response.data);
        setUserId(userStorage.id);
      });
    }
  }, []);

  async function signup(user: User) {
    try {
      const { data } = await api.post("signup", user);
      localStorage.setItem("@rocketseat_clone", JSON.stringify(data));

      setUser(data);
    } catch (error) {
      console.log(error);
    }

    router.push("/dashboard");
  }

  async function handleUpdateProfileUser(user: UserProfileInformation) {
    try {
      const { data: updatedUser } = await api.put(`user/${userId}`, user);

      setUser(previousState => {
        return {
          ...previousState,
          ...updatedUser
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        handleUpdateProfileUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
