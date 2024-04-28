
const API_KEY = process.env.REACT_APP_API_KEY;


const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  fetchNetflixOriginals:'/discover/tv?api_key=${API_KEY}&with_networks=213',

  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,


  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1`  

};

export default requests;

// eg for tvshow, we have to use
//  apikey = 8921e756b3303eca85d1e1332b1c2edc,
  // Each product nested url:  /discover/movie?api_key=${API_KEY}&language=en-US&page=1  
  // Common or baseurl = https:https://api.themoviedb.org/3

  // after re arranging and substitute each inquiries with the baseurl and apikey

  
// fetchTvShow: `https://api.themoviedb.org/3/discover/movie?api_key=8921e756b3303eca85d1e1332b1c2edc&language=en-US&page=1`  


// other way to display banner image  using json data

// baseurl: https://image.tmdb.org/t/p/original,
// comming from json data
// "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",

// when we use
// https://image.tmdb.org/t/p/original/4woSOUD0equAYzvwhWBHIJDCM88.jpg
