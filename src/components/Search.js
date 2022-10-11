import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: props.home,
            type: '',
            url: 'http://www.omdbapi.com/?apikey=280acd76'
        }
        this.api = {
            url: `http://www.omdbapi.com/?apikey=${API_KEY}`
        }
    }

    searchInput = (event) => {
        this.setState({search: event.target.value})
    }

    searchFilter = (event) => {
        this.setState({type: event.target.value})
        let url = `${this.api.url}&s=${this.state.search}&type=${event.target.value}`
        this.props.search(url)
    }

    searchSend = (event) => {
        if (event.code === 'Enter' && this.state.search.length > 0) {
            let url = `${this.api.url}&s=${this.state.search}&type=${this.state.type}`
            this.props.search(url)
        }
    }

    searchSendButton = () => {
        if (this.state.search.length > 0) {
            let url = `${this.api.url}&s=${this.state.search}&type=${this.state.type}`
            this.props.search(url)
        }
    }

    render() {

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="email"
                        type="search"
                        className="validate"
                        placeholder='search'
                        value = {this.state.search}
                        onChange={this.searchInput}
                        onKeyDown={this.searchSend}
                    />
                    <button
                        className='waves-effect waves-light btn-small'
                        onClick={this.searchSendButton}>Search
                    </button>

                </div>
                <form action="" >
                <label>
                    <input  name="type" type="radio" value='' onChange={this.searchFilter} checked={this.state.type === ''}/>
                    <span>All</span>
                </label>
                <label>
                    <input  name="type" type="radio" value='movie' onChange={this.searchFilter} checked={this.state.type === 'movie'}/>
                    <span>Movie</span>
                </label>
                <label>
                    <input name="type" type="radio" value='series' onChange={this.searchFilter} checked={this.state.type === 'series'}/>
                    <span>Series</span>
                </label>
                </form>
            </div>
        )
    }
}


export default Search;