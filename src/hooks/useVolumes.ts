import { useMutation } from '@tanstack/react-query';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchVolumes = async (term: string) => {
  const res = await fetch(`${BASE_URL}?q=${term}`);
  const json = await res.json();
  return json;
};

const useVolumes = (term: string) => {
  const mutation = useMutation(['volumes'], () => fetchVolumes(term));

  return mutation;
};

export default useVolumes;
