
export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITES='ADD_FAVOURITES'

export function addMovies (movies){
    return { 
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourites (movies){
    return { 
        type:ADD_FAVOURITES,
        movies
    }
}

