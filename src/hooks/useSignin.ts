import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, SignIn, unknown>(
    [QUERY_KEY.signin],
    signin,
    {
      onSuccess: (data) => {
        queryClient.setQueryData([QUERY_KEY.user], data);
        saveUserOnStorage(data);
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
