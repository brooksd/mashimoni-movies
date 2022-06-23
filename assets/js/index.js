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