import { useState } from 'react';
import Button from '../../components/Button';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useSignup();

  const handleRegister = (e: any) => {
    e.preventDefault();
    const user: User = {
      name,
      email,
      password,
    };
    mutation.mutate(user);
  };

  const isSubmitDisable = mutation.status === 'loading';

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor='name'>name</label>
          <input
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <Button type='submit' label='Register' disabled={isSubmitDisable} />
      </form>
    </>
  );
};

export default Signup;
