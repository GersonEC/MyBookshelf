import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { QUERY_KEY } from '../utils/constants';
import useSessionStorage from './useSessionStorage';

const useSignout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { removeUser } = useSessionStorage();
  const { resetUser } = useContext(UserContext);

  const signout = useCallback(() => {
    queryClient.setQueryData([QUERY_KEY.user], null);
    removeUser();
    resetUser();
    navigate('/sign-in');
  }, [navigate, queryClient, removeUser, resetUser]);

  return signout;
};

export default useSignout;
