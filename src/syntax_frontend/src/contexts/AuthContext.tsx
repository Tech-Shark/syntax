// context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";
import { toast } from 'react-toastify';
import { 
  initializeAuth, 
  authenticateUser, 
  addNewUser,
  AUTH_MESSAGES,
  UserInput,
  getSingleUser
} from "../Api/apiService";

interface UserDetails {
  principal: string | null;
  isAuthenticated: boolean;
  authClient: AuthClient | null;
  bioData?: any;
}

interface AuthContextType {
  user: UserDetails;
  loading: boolean;
  // handleSignup: (userData: any) => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  userDetails?: Record<string, any>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDetails>({
    principal: null,
    isAuthenticated: false,
    authClient: null,
  });
  const [ userDetails, setUserDetails ] = useState({})

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  
    const singleUserData = async() => {
      const result:any = await getSingleUser()
      console.log('res', result.other.bio[0])
      return setUserDetails(result.other.bio[0])
    }
  useEffect(() => {
    const initAuth = async () => {
      try {
        const authClient = await initializeAuth();
        const principal = authClient.getIdentity().getPrincipal();
        
        if (!principal.isAnonymous()) {
          setUser({
            principal: principal.toString(),
            isAuthenticated: true,
            authClient,
          });
          const userCheck = await getSingleUser();
          if ('Err' in userCheck) {
            const userInput: UserInput = {
              bio: [],
              plan: "Free"
            };
            await addNewUser(userInput);
            toast.success("Authentication Successful")
          }
          navigate("/user-dashboard");
          toast.success("Welcome back!");
        } else {
          setUser(prev => ({ ...prev, authClient }));
          navigate("/signup");
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        toast.error("Failed to initialize authentication");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
    singleUserData()
  }, []);

  const login = async () => {
    if (!user.authClient) {
      toast.error("Authentication client not initialized");
      return;
    }

    try {
      const result = await authenticateUser(user.authClient, (principal) => {
        setUser(prev => ({
          ...prev,
          principal,
          isAuthenticated: true,
        }));
      });

      if (result === AUTH_MESSAGES.NEWLY_AUTHENTICATED) {
        const userInput: UserInput = {
          bio: [],
          plan: "Free"
        };
        
        try {
          await addNewUser(userInput);
          toast.success("Account created successfully!");
          navigate("/user-dashboard");
        } catch (error) {
          console.error("Failed to create user profile:", error);
          toast.error("Failed to create profile");
        }
      } else if (result === AUTH_MESSAGES.ALREADY_LOGGED_IN) {
        try {
          const userCheck = await getSingleUser();
          if ('Err' in userCheck) {
            const userInput: UserInput = {
              bio: [],
              plan: "Free"
            };
            await addNewUser(userInput);
          }
          toast.success("Welcome back!");
          navigate("/user-dashboard");
        } catch (error) {
          console.error("Error checking user:", error);
          toast.error("Error checking user profile");
        }
      } else if (result === AUTH_MESSAGES.INTERRUPTED_AUTHENTICATION) {
        toast.error("Authentication was interrupted");
      } else if (result === AUTH_MESSAGES.NO_IDENTITY) {
        toast.error("No identity found");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Authentication failed. Please try again");
      navigate("/signup");
    }
  };

  const logout = async () => {
    if (user.authClient) {
      try {
        await user.authClient.logout();
        setUser({
          principal: null,
          isAuthenticated: false,
          authClient: user.authClient,
        });
        navigate("/signin");
        toast.success("Logged out successfully");
      } catch (error) {
        console.error("Logout failed:", error);
        toast.error("Failed to logout");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, userDetails, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
