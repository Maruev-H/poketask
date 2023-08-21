//@ts-ignore
import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string): Promise<AbilitiesResponse> => axios.get(url).then((res) => res.data);

export const useAbilities = ({ limit, offset }: Record<string, number>) => {
  const apiUrl = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`;

  return useSWR(apiUrl, fetcher);
};

export interface Ability {
  name: string;
  url: string;
}

export interface AbilitiesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ability[];
}
