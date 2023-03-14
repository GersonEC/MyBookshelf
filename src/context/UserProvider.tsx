import React, { PropsWithChildren, useState } from 'react';

interface UserContextProps {
  user: User;
  addUser: (user: User) => void;
  resetUser: () => void;
}

const initialUser = {
  name: '',
  email: '',
  password: '',
  accessToken: undefined,
};
export const UserContext = React.createContext<UserContextProps>({
  user: initialUser,
  addUser: () => null,
  resetUser: () => null,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>(initialUser);

  const addUser = (user: User) => {
    setUser(user);
  };

  const resetUser = () => {
    // const nextBooks = books.filter((book) => book.id !== id);
    // setBooks(nextBooks);
  };

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
