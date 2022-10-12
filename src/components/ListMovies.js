import React from "react";
import OneCardMovie from "./OneCardMovie";


class ListMovies extends React.Component {

    render() {
        const {movies = []} = this.props

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