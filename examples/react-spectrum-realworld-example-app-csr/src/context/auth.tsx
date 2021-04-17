import * as React from 'react';
import { useEffect, useReducer, useContext, createContext } from 'react';
import { getLocalStorageValue } from '../utils';
import { TOKEN_KEY, setToken, isTokenValid } from '../api/APIUtils';
import { logout } from '../api/AuthAPI';
import {
  authReducer,
  initialState,
  AuthAction,
  AuthState,
} from '../reducers/auth';

type AuthContextProps = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

const AuthContext = createContext<AuthContextProps>({
  state: initialState,
  dispatch: () => initialState,
});

export function AuthProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = getLocalStorageValue(TOKEN_KEY);

    if (!token) return;

    if (isTokenValid(token)) {
      setToken(token);
      dispatch({ type: 'LOGIN' });
    } else {
      dispatch({ type: 'LOGOUT' });
      logout();
    }
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
}

export default function useAuth() {
  return useContext(AuthContext);
}
