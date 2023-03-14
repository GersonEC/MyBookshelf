import { useCallback } from 'react';
import { USER_SESSION_STORAGE_KEY } from '../utils/constants';

const useSessionStorage = () => {
  const saveUser = useCallback((user: User) => {
    sessionStorage.setItem(USER_SESSION_STORAGE_KEY, JSON.stringify(user));
  }, []);

  const getUser = useCallback((): User | undefined => {
    const element = sessionStorage.getItem(USER_SESSION_STORAGE_KEY);
    if (!element) return undefined;
    const user = JSON.parse(element) as User;
    return user;
  }, []);

  const removeUser = useCallback(() => {
    sessionStorage.removeItem(USER_SESSION_STORAGE_KEY);
  }, []);

  return {
    saveUser,
    getUser,
    removeUser,
  };
};

export default useSessionStorage;
