import React, {useEffect, useState} from 'react';
import ListMovies from "../components/ListMovies";
import PreLoader from "../components/PreLoader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movie, setMovie] = useState([])
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const home = 'avengers'

    useEffect(componentDidMount, [])

    function componentDidMount () {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${home}`)
            .then(resp => resp.json())
            .then(data => {
                setMovie(data.Search)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const searchSend  = (url) => {
        setLoading(true)
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (data.Search) {
                       setMovie(data.Search)
                       setLoading(false)
                       setError(null)
                }
                else {
                    setError(data)
                    setLoading(true)
                }
            })
            .catch(error => {
            console.log(error)
        })
    }

        return (
           <main className='main-content'>
               <Search search={searchSend} home={home}/>
               {
                    loading ?  <PreLoader error={error}/> : (<ListMovies movies={movie}/>)
               }
           </main>
        );
}

export default Main;


