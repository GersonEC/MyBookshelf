import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { QUERY_KEY } from '../utils/constants';
import useSessionStorage from './useSessionStorage';

const signup = async (user: User) => {
  const res = await fetch(`http://localhost:8080/signup`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const useSignup = () => {
  const { addUser: addUserOnContext } = useContext(UserContext);
  const { saveUser: saveUserOnStorage } = useSessionStorage();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, User, unknown>(
    [QUERY_KEY.signup],
    signup,
    {
      onSuccess: (user) => {
        queryClient.setQueryData([QUERY_KEY.user], user);
        saveUserOnStorage(user);
        addUserOnContext(user);
        navigate('/');
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  return mutation;
};

export default useSignup;
