const moviesDefault = [];

export default (state = moviesDefault, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.movies;
        case 'UPDATE_RATING':
            let movies = [];
            movies = state.map((item, index) => {
                item.id === action.movie.id && (item = action.movie);
                return item;
            });
            return movies;
        default:
            return state;
    }
}