import { USER_SESSION_STORAGE_KEY } from '../utils/constants';

const useSessionStorage = () => {
  const saveUser = (user: User) => {
    sessionStorage.setItem(USER_SESSION_STORAGE_KEY, JSON.stringify(user));
  };

  const getUser = (): User | undefined => {
    const element = sessionStorage.getItem(USER_SESSION_STORAGE_KEY);
    if (!element) return undefined;
    const user = JSON.parse(element) as User;
    return user;
  };

  const removeUser = () => {
    sessionStorage.removeItem(USER_SESSION_STORAGE_KEY);
  };

  return {
    saveUser,
    getUser,
    removeUser,
  };
};

export default useSessionStorage;
