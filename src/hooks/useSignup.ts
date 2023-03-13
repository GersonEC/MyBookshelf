import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const signup = async (user: User) => {
  const res = await fetch(`http://localhost:8080/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const useSignup = () => {
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, User, unknown>(
    ['signup'],
    signup,
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

export default useSignup;
