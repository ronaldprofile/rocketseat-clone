import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
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

interface Account {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
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
  signup: (account: Account) => Promise<void>;
  signOut: () => void;
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
        code: githubCode,
      });

      const { user, token } = response.data;

      localStorage.setItem("@rocketseat_clone:token", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }
  }

  async function signup(account: Account) {
    try {
      const { data: accountData } = await api.post("signup", account);
      localStorage.setItem("@rocketseat_clone:accountId", accountData.id);

      setUser(accountData);
    } catch (error) {
      console.log(error);
    }

    router.push("/dashboard");
  }

  function signOut() {
    localStorage.removeItem("@rocketseat_clone:userId");
    router.push("/login");

    setUser(null);
  }

  async function signInWithEmailAndPassword(email: string, password: string) {
    try {
      const { data: userData } = await api.post("auth/login", {
        email,
        password,
      });

      if (!userData) {
        toast.error("E-mail ou senha inválidos", {
          theme: "colored",
          icon: false,
        });

        throw new Error("E-mail and password invalid");
      }

      localStorage.setItem("@rocketseat_clone:userId", userData.id);

      setUser(userData);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const accountId = localStorage.getItem("@rocketseat_clone:accountId");

    if (accountId) {
      api.get(`account/${accountId}`).then((response) => {
        setUser(response.data);
        setUserId(accountId);
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signOut,
        signInWithEmailAndPassword,
        signInWithGithub,
        signInGithubUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
