import React from 'react';
import ListMovies from "../components/ListMovies";
import PreLoader from "../components/PreLoader";
import Search from "../components/Search";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            error: null,
            home: 'matrix'
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=280acd76&s=${this.state.home}`)
            .then(resp => resp.json())
            .then(data => this.setState({movie: data.Search}))
    }

    searchSend  = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (data.Search) {
                   return this.setState({movie: data.Search, error: null})
                }
                else {
                   return this.setState({error: data})
                }
            })
    }

    render() {
        const {movie, error} = this.state

        return (
           <main className='main-content'>
               <Search search={this.searchSend} home={this.state.home}/>
               {
                   error === null ? (<ListMovies movies={movie}/>) : <PreLoader error={error}/>
               }

           </main>
        );
}}

export default Main;


