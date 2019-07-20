import React from 'react';
import { startUpdateRating } from '../action/movies';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

class Movie extends React.Component {
    onRatingChange = (rating) => {
        if (!this.props.isRandomRatingLive)
            this.props.startUpdateRating({ ...this.props.movieObject, rating });
    }

    render() {
        return (
            <div className="listItem content-container">
                <h2 className="titleMovie">
                    {this.props.movieObject.movie}
                </h2>
                <div className="ratingContainer">
                    <div className="ratingText">
                        {`Rating: ${this.props.movieObject.rating}`}
                    </div>
                    <div className="starRating">
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={this.props.movieObject.rating}
                            onStarClick={this.onRatingChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startUpdateRating: (movieObject) => dispatch(startUpdateRating(movieObject))
});

export default connect(null, mapDispatchToProps)(Movie);

