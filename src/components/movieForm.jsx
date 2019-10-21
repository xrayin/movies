import React, {Component} from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import {getMovie, saveMovie} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";

class MovieForm extends Form {
    // {match.params.id}

    state = {
        data : {title: '', genreId: '', numberInStock: '', dailyRentalRate: ''},
        errors: {},
        genres: []
    };

    schema = {
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().min(0).max(10).label('Daily Rental Rate')

    };

    componentDidMount(): void {
        const genres = getGenres();
        this.setState({genres});

        const movideId = this.props.match.params.id;
        if (movideId === "new") return;

        const movie = getMovie(movideId);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({data: this.mapToViewModel(movie) })
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.number,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        saveMovie(this.state.data);

        this.props.history.push("/movies")
    }

    render() {
        return (
            <div>
                <h1>Movie Form </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', "Genre", this.state.genres)}
                    {this.renderInput('numberInStock', 'Stock')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
};

export default MovieForm;