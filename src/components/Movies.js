import React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import Button from './Button';

let sortedMovies = [];
class Movies extends React.Component {
    state = {
        isRandomRatingLive: false
    }

    handleRandomRating = () => {
        this.setState({ isRandomRatingLive: !this.state.isRandomRatingLive })
    }

    render() {
        sortedMovies = this.props.movies.sort((a, b) => {
            return b.rating - a.rating;
        });
        return (
            <div className="content-container">
                {
                    sortedMovies.map((item, index) => {
                        return (<Movie key={index} movieObject={item} isRandomRatingLive={this.state.isRandomRatingLive} />)
                    })
                }
                <Button movies={this.props.movies} handleRandomRating={this.handleRandomRating} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state
});

export default connect(mapStateToProps, null)(Movies);
