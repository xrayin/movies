import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import ListGroup from './common/listGroup';
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path: 'title', order: 'asc'}
    };

    componentDidMount(): void {
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()]

        this.setState({movies: getMovies(), genres});
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage: 1})
    }

    handleSort = sortColumn => {
        this.setState({sortColumn});
    }

    getPagedData = () => {

        const {pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies} = this.state;

        //This filters all the movies depending on the genre and in case no genre is selected show all movies.
        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                : allMovies;

        //This sorts the movies by path like title, genre, stock, etc.
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        //This paginates the page depending on the amount of movies.
        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies};
    };

    render() {

        const {length: count} = this.state.movies;
        const {pageSize, currentPage, sortColumn} = this.state;

        if (count === 0) return <p className="float-left"> There are no movies in the database.</p>;
        const {totalCount, data: movies} = this.getPagedData();

        return (

            <div className="row">
                <div className="col-3">

                    <ListGroup items={this.state.genres}
                               onItemSelect={this.handleGenreSelect}
                               selectedItem={this.state.selectedGenre}
                    />

                </div>
                <div className="col">
                    <Link className="btn btn-primary btn-small" to="/movies/new" style={{marginBottom: 20}}>
                        New Movie
                    </Link>
                    <p className="">Showing {totalCount} movies in the database.</p>
                    <MoviesTable movies={movies}
                                 sortColumn={sortColumn}
                                 onLike={this.handleLike}
                                 onDelete={this.handleDelete}
                                 onSort={this.handleSort}
                    />

                    <Pagination itemsCount={totalCount} pageSize={pageSize} currentPage={currentPage}
                                onPageChange={this.handlePageChange}/>
                </div>
            </div>
        );
    }
}

export default Movies;