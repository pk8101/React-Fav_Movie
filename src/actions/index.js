
export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITES='ADD_FAVOURITES'
export const REMOVE_FAVOURITES='REMOVE_FAVOURITES'
export const SHOW_FAVOURITES='SHOW_FAVOURITES'
export const ADD_SEARCH_RESULT ='ADD_SEARCH_RESULT'

export function addMovies (movies){
    return { 
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourites (movie){
    return { 
        type:ADD_FAVOURITES,
        movie
    }
}

export function removeFavourites (movie){
    return { 
        type:REMOVE_FAVOURITES,
        movie
    }
}

export function showFavourites (val){
    return { 
        type:SHOW_FAVOURITES,
        val
    }
}

export function handleMovieSearch(movie){ 
    const url=`http://www.omdbapi.com/?apikey=&=3ca5df7&t=${movie}`
    return function(dispatch){
    fetch(url)
    .then(response =>response.json())
    .then(movie=>{
        console.log(movie)

    })
 }
}

export  function addMovieSearch(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    }
}