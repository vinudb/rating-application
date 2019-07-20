import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startSetMovies, startUpdateRating } from './action/movies';
import moviesReducer from './reducers/movies';
const createMockStore = configureMockStore([thunk]);

const movies = [{
  movie: "Logan",
  rating: 1,
  id: 1
},
{
  movie: "Beauty and the Beast ",
  rating: 4,
  id: 2
},
{
  movie: "Deadpool",
  rating: 3,
  id: 3
}];

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  const jsx = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.render(jsx, div);
  ReactDOM.unmountComponentAtNode(div);
});

//action related tests
it('fetch all movies from json file', () => {
  const store = createMockStore();
  store.dispatch(startSetMovies()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_MOVIES',
      movies
    });
    done();
  });
});

it('update rating of a movie object', () => {
  const store = createMockStore();
  store.dispatch(startUpdateRating({
    "movie": "Logan",
    "rating": 5,
    "id": 1
  })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'UPDATE_RATING',
      movie
    });
    done();
  });
});

//Reducer related tests
it('should set default state', () => {
  const state = moviesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

it('should set movies', () => {
  const action = {
    type: 'SET_MOVIES',
    movies: [movies]
  };
  const state = moviesReducer(movies, action);
  expect(state).toEqual([movies]);
});

it('should update rating', () => {
  movies[0].rating = 5;
  const action = {
    type: 'UPDATE_RATING',
    movie: movies[0]
  };
  const state = moviesReducer(movies, action);
  expect(state[0].rating).toBe(5);
});

