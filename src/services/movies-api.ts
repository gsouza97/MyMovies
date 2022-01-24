import api from "./api";

const { API_KEY } = process.env;

const moviesApi = {
  getNowShowingMovies: async function (page: number) {
    return await api.get(
      `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  },

  getPopularMovies: async function (page: number) {
    return await api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  },

  getMovieCast: async function (movieId: number) {
    return await api.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
  },

  getRelatedMovies: async function (movieId: number) {
    return await api.get(
      `/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
  },

  getMovieReviews: async function (movieId: number) {
    return await api.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
  },

  getMovieRuntime: async function (movieId: number) {
    return await api.get(`/movie/${movieId}?api_key=${API_KEY}`);
  },

  getMoviesSearch: async function (query: string) {
    return await api.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  },
};

export default moviesApi;
