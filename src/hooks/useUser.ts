import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { QUERY_KEY } from '../utils/constants';
import useSessionStorage from './useSessionStorage';

const fetchUser = async (
  user: User | null | undefined
): Promise<User | null> => {
  if (!user) return null;
  const res = await fetch(`http://localhost:8080/users/${user.id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  if (!res.ok) throw new Error('Failed on get user request');
  const json = await res.json();
  return json;
};

const useUser = () => {
  const {
    getUser,
    removeUser: removeUserFromStorage,
    saveUser: saveUserOnStorage,
  } = useSessionStorage();
  const { data: user } = useQuery<User | null>(
    [QUERY_KEY.user],
    async (): Promise<User | null> => fetchUser(user),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: getUser,
      onError: () => removeUserFromStorage(),
    }
  );

  useEffect(() => {
    if (!user) {
      removeUserFromStorage();
      return;
    }
    saveUserOnStorage(user);
  }, [user, removeUserFromStorage, saveUserOnStorage]);

  return user ?? null;
};

export default useUser;
