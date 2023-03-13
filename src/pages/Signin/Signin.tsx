import { useState } from 'react';
import Button from '../../components/Button';
import useSignin from '../../hooks/useSignin';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useSignin();

  const handleRegister = (e: any) => {
    e.preventDefault();
    const user: SignIn = {
      email,
      password,
    };
    mutation.mutate(user);
  };

  const isSubmitDisable = mutation.status === 'loading';

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type='submit' label='Sign In' disabled={isSubmitDisable} />
      </form>
    </>
  );
};

export default Signin;
