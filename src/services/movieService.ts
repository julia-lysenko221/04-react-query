import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieApiResponse {
  results: Movie[];
  total_pages: number;
}

// const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(
  query: string,
  page: number
): Promise<MovieApiResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<MovieApiResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
