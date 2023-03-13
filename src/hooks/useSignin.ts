import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const signin = async (user: SignIn) => {
  const res = await fetch(`http://localhost:8080/signin`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const useSignin = () => {
  const navigate = useNavigate();
  const mutation = useMutation<User, unknown, SignIn, unknown>(
    ['signin'],
    signin,
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
