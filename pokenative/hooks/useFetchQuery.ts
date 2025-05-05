import { useQuery } from "@tanstack/react-query";

const endpoint = 'https://pokeapi.co/api/v2/';

export function useFetchQuery(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      await wait(1);
      const response = await fetch(endpoint + url);
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    }
  });
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}


