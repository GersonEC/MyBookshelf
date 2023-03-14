import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useSessionStorage from '../hooks/useSessionStorage';

interface UserContextProps {
  user: User | null;
  addUser: (user: User) => void;
  resetUser: () => void;
}

// const initialUser = {
//   name: '',
//   email: '',
//   password: '',
//   accessToken: undefined,
// };
export const UserContext = React.createContext<UserContextProps>({
  user: null,
  addUser: () => null,
  resetUser: () => null,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const { getUser } = useSessionStorage();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStoraged = getUser();
    if (userStoraged) setUser(userStoraged);
  }, [getUser, setUser]);

  const addUser = useCallback((user: User) => {
    setUser(user);
  }, []);

  const resetUser = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        addUser,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
