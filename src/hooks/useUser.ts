import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { QUERY_KEY } from '../utils/constants';
import useSessionStorage from './useSessionStorage';

const fetchUser = async (/*user: User*/) => {
  // if (!user) return null;
  // const res = await fetch(`http://localhost:8080/user`, {
  //   headers: {
  //     Authorization: `Bearer ${user.accessToken}`,
  //   },
  // });
  // const json = await res.json();
  return null;
};

interface UseUserResponse {
  user: User | null;
}

const useUser = () => {
  const {
    getUser,
    removeUser: removeUserFromStorage,
    saveUser: saveUserOnStorage,
  } = useSessionStorage();
  const { data: user } = useQuery<User | null>([QUERY_KEY.user], fetchUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: getUser,
    onError: () => removeUserFromStorage(),
  });

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
