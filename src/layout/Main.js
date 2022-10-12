import React from 'react';
import ListMovies from "../components/ListMovies";
import PreLoader from "../components/PreLoader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            error: null,
            home: 'zombie',
            loading: '',
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.home}`)
            .then(resp => resp.json())
            .then(data => this.setState({movie: data.Search, loading: false}))
            .catch(error => {
                console.log(error)
            })
    }

    searchSend  = (url) => {
        this.setState({loading: true})
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (data.Search) {
                   return this.setState({movie: data.Search, error: null, loading: false})
                }
                else {
                   return this.setState({error: data, loading: true})
                }
            })
            .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {movie, error, loading} = this.state

        return (
           <main className='main-content'>
               <Search search={this.searchSend} home={this.state.home}/>
               {
                    loading ?  <PreLoader error={error}/> : (<ListMovies movies={movie}/>)
               }

           </main>
        );
}}

export default Main;


