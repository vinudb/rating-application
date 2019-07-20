import React from 'react';
import './App.css';
import Movies from './components/Movies';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Movie Ratings</h2>
        <Movies />
      </div>
    );
  }
}