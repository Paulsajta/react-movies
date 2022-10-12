import React from "react";
import OneCardMovie from "./OneCardMovie";


const ListMovies = (props) => {

    {
        const {movies = []} = props

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