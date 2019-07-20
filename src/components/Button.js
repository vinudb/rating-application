import React from 'react';
import { startUpdateRating } from '../action/movies';
import { connect } from 'react-redux';

class Button extends React.Component {
    state = {
        buttonStatus: false
    }

    myInterval = undefined;
    onClickHandle = (e) => {
        this.props.handleRandomRating();
        this.setState({ buttonStatus: !this.state.buttonStatus }, () => {
            //start random rating here
            if (this.state.buttonStatus) {//if true, start random rating
                this.myInterval = window.setInterval(() => {
                    window.setTimeout(() => {
                        const randNum = Math.floor(Math.random() * this.props.movies.length);
                        const randRating = Math.floor(Math.random() * 5 + 1);
                        this.props.startUpdateRating({ ...this.props.movies[randNum], rating: randRating });
                    }, Math.floor(Math.random() * 2000 + 1));
                }, Math.floor(Math.random() * 2000 + 1));
            }
            else {
                clearInterval(this.myInterval);
            }
        });
    }

    render() {
        return (
            <div>
                <button
                    className="button"
                    onClick={this.onClickHandle}
                >{this.state.buttonStatus === false ? "Start Random Rating" : "Stop Random Rating"}</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startUpdateRating: (movieObject) => dispatch(startUpdateRating(movieObject))
});

export default connect(null, mapDispatchToProps)(Button);