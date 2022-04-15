import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useRouter } from "next/router";
import { api } from "../services/api";
import { toast } from "react-toastify";

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

interface GithubUserResponse {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
}

interface AuthResponse {
  user: GithubUserResponse;
  token: string;
}

interface AuthContextData {
  user: User | null;
  signup: (user: User) => Promise<void>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;
  signInWithGithub: (githubCode: string) => Promise<void>;
  signInGithubUrl: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const router = useRouter();
  const signInGithubUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=04a370bba713cefc545a`;

  async function signInWithGithub(githubCode: string) {
    try {
      const response = await api.post<AuthResponse>("authenticate", {
        code: githubCode
      });

      const { user, token } = response.data;

      localStorage.setItem("@rocketseat_clone:token", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }
  }

  async function signup(user: User) {
    try {
      const { data: userData } = await api.post("signup", user);
      localStorage.setItem(
        "@rocketseat_clone:userId",
        JSON.stringify(userData.id)
      );

      setUser(userData);
    } catch (error) {
      console.log(error);
    }

    router.push("/dashboard");
  }

  async function signInWithEmailAndPassword(email: string, password: string) {
    try {
      const { data: userData } = await api.post("authenticate/login", {
        email,
        password
      });

      if (!userData) {
        toast.error("E-mail ou senha inválidos", { theme: "colored" });
        return;
      }

      setUser(userData);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const userIdStorage = localStorage.getItem("@rocketseat_clone:userId");

    if (userIdStorage) {
      api.get(`user/${userIdStorage}`).then(response => {
        setUser(response.data);
        setUserId(userIdStorage);
      });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@rocketseat_clone:token");

    if (token) {
      api.get(`user/${userId}`).then(response => {
        setUser(response.data);
      });
    }
  }, [userId]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signInWithEmailAndPassword,
        signInWithGithub,
        signInGithubUrl
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
