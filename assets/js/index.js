//Global API variables
// const config = {
//     apikey: "edfd7aa4792af952873ca60f7f05e6a8",
//     tmdbUrl: "https://api.themoviedb.org/3/",
//     imageUrl: "https://image.tmdb.org/t/p/w1280"
// }

export const config = {
    api_key: "edfd7aa4792af952873ca60f7f05e6a8",
    api_base_url: 'https://api.themoviedb.org/3/',
    image_base_url: 'https://image.tmdb.org/t/p/w1280'
}
const renderMoviesDiv = document.getElementById("movies")

const BASE_URL = config.api_base_url
const API_KEY = config.api_key

export async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {
        
    }
    return data
}

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
            <img src="${config.image_base_url + movie?.poster_path}" class="img-fluid" >
        </div>
        `
    )
}

function App() {
    renderMovies()
}
App();  