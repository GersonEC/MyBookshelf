import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEY } from '../utils/constants';

const signup = async (user: User) => {
  const res = await fetch(`http://localhost:8080/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const useSignup = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, User, unknown>(
    [QUERY_KEY.signup],
    signup,
    {
      onSuccess: (data) => {
        queryClient.setQueryData([QUERY_KEY.user], data);
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
