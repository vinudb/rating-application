let url = "http://localhost:3010/";

// SET_MOVIES
export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    movies
});

//Fetch all movies from json file and dispatch action to save in redux store
export const startSetMovies = () => {
    const tempUrl = `${url}movies`;
    return (dispatch) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let movies = data.map((movie, index) => {
                    return (
                        movie
                    );
                })
                dispatch(setMovies(movies));
            })
    }
}

//UPDATE_RATING
export const updateRating = (movie) => ({
    type: 'UPDATE_RATING',
    movie
});

//save the updated object of movie into the json file using put method and dispatch action to update store.
export const startUpdateRating = (movie) => {
    const tempUrl = `${url}movies/${movie.id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(updateRating(data));
            })
    }
}