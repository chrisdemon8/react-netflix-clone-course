const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

const Requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=${language}&page=1`,
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${language}&page=1`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=${language}&page=1`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${language}&page=1`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${language}&page=1`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${language}&page=1`,
};

export default Requests;
