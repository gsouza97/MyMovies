import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AppleAuthentication from "expo-apple-authentication";
import * as AuthSession from "expo-auth-session";

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
  loginWithApple(): Promise<void>;
  loginWithGoogle(): Promise<void>;
  logout(): Promise<void>;
}

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);
  const userStorageKey = "@mymovies:user";

  async function loginWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo: `https://ui-avatars.com/api/?name=${credential.fullName!
            .givenName!}&length=1`,
        };

        setUser(userLogged);

        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));

        console.log(user);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async function loginWithGoogle() {
    try {
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const authorizationResponse = await AuthSession.startAsync({ authUrl });

      if (authorizationResponse.type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authorizationResponse.params.access_token}`
        );

        const userInfo = await response.json();
        const userLogged = {
          id: userInfo.id,
          name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.picture,
        };

        setUser(userLogged);

        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));

        console.log(user);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async function logout() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(() => {
    async function loadUserFromStorage() {
      const storagedUser = await AsyncStorage.getItem(userStorageKey);

      if (storagedUser) {
        const userLogged = JSON.parse(storagedUser) as User;
        setUser(userLogged);
      }
      setLoading(false);
    }

    loadUserFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: user, loginWithApple, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
