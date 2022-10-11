import React from "react";
import OneCardMovie from "./OneCardMovie";
import main from "../layout/Main";

class ListMovies extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {movies} = this.props

        return (
            <div className='list'>
                {movies.map(movie => {
                        return <OneCardMovie key={movie.imdbID} {...movie} />
                    })}
            </div>
        )
    }

}

export default ListMovies