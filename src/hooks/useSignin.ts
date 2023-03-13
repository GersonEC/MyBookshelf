import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const register = async (user: User) => {
  const res = await fetch(`http://localhost:8080/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const useSignin = () => {
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, User, unknown>(
    ['register'],
    register,
    {
      onSuccess: () => {
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
