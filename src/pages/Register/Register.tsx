import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import Button from '../../components/Button';

const register = async (user: User) => {
  const res = await fetch(`http://localhost:8080/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useMutation(['register'], register);

  const handleRegister = (e: any) => {
    e.preventDefault();
    const user: User = {
      name,
      email,
      password,
    };
    mutation.mutate(user);
  };

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
        <Button type='submit' label='Register' />
      </form>
    </>
  );
};

export default Register;
