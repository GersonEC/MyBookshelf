import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../utils/constants';

const getUser = async (/*user: User*/) => {
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
  const query = useQuery<User | null>([QUERY_KEY.user], getUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  return query;
};

export default useUser;
