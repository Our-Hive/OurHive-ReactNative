import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type IAuthContextProps = {
  isAuth: boolean;
  setIsAuth: (newState: boolean) => void;
};

const initialAuth: IAuthContextProps = {
  isAuth: false,
  setIsAuth: () => {},
};

export const AuthContext = createContext<IAuthContextProps>(initialAuth);

export function AuthProvider({ children }: Props) {
  const [isAuth, setIsAuth] = useState(initialAuth.isAuth);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
