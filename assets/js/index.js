/*=========================================
    Global Variable Declaration
===========================================*/

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=edfd7aa4792af952873ca60f7f05e6a8&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=edfd7aa4792af952873ca60f7f05e6a8&query="'

const form = document.querySelector('.form')
const search = document.querySelector('.search__bar')
const main = document.querySelector('.main')
const movieHeader = document.getElementById('movie__header')
const notFound = document.querySelector('.not-found')
//Get initial movies
getMovies(API_URL)

async function getMovies(url){
    
    const response = await axios.get(url)
    const data = await response.data
    showMovies(data.results)
    
}
/*=========================================
    Hero Banner Function
===========================================*/

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    // every refresh the movie will be change
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");
    banner.style.backgroundImage =  "url(" + IMG_PATH + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 400);
    banner_title.innerText = setMovie.original_title;
  });

  /*=========================================
    Render Movies Function
===========================================*/

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview, release_date} =  movie
        const date = release_date.slice(0,4)
        const movieTitle = title.slice(0,35)
        const movieOverview = overview.slice(0,400) 
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')
        movieElement.innerHTML =
        `
        <div class="img__container">
        <img src="${IMG_PATH + poster_path}" alt="${movieTitle}">
        <div class="year">${date}</div>
        </div>    
        
            <div class="movie__info">
                <h3>${movieTitle}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
            <small>${movieOverview}</small>
            </div>
        
        `
        main.appendChild(movieElement)
        
    });
}