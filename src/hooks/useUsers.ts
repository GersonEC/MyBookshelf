import { useQuery } from '@tanstack/react-query';

export const fetchUsers = async () => {
  const res = await fetch(`http://localhost:8080/users`);
  const json = await res.json();
  return json;
};

const useUsers = () => {
  const query = useQuery(['users'], fetchUsers);

  return query;
};

export default useUsers;
