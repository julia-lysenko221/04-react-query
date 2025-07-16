import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieApiResponse {
  results: Movie[];
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(query: string): Promise<Movie[]> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const config = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get<MovieApiResponse>(BASE_URL, config);
  return data.results;
}
