import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { QUERY_KEY } from '../utils/constants';
import useSessionStorage from './useSessionStorage';

const signin = async (user: SignIn) => {
  const res = await fetch(`http://localhost:8080/signin`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const useSignin = () => {
  const { saveUser: saveUserOnStorage } = useSessionStorage();
  const { addUser: addUserOnContext } = useContext(UserContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, SignIn, unknown>(
    [QUERY_KEY.signin],
    signin,
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

export default useSignin;
