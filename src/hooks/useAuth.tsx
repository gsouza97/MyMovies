import { createContext, ReactNode, useContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "1234567",
    name: "Gabriel",
    email: "gabrielss@outlook.com",
    photo: "/fdsafdsa",
  };

  return (
    <AuthContext.Provider value={{ user: user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
