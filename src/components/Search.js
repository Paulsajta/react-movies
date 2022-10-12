import React, {useState} from 'react';

const API_KEY = process.env.REACT_APP_API_KEY


const Search = (props) => {

    const [search, setSearch] = useState(props.home)
    const [type, setType] = useState('')
    const web = `https://www.omdbapi.com/?apikey=${API_KEY}`

    const searchInput = (event) => {
        setSearch(event.target.value)
    }

    const searchFilter = (event) => {
        setType(event.target.value)
        let url = `${web}&s=${search}&type=${event.target.value}`
        props.search(url)
    }

    const searchSend = (event) => {
        if (event.code === 'Enter' && search.length > 0) {
            let url = `${web}&s=${search}&type=${type}`
            props.search(url)
        }
    }

    const searchSendButton = () => {
        if (search.length > 0) {
            let url = `${web}&s=${search}&type=${type}`
            props.search(url)
        }
    }

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="email"
                        type="search"
                        className="validate"
                        placeholder='search'
                        value = {search}
                        onChange={searchInput}
                        onKeyDown={searchSend}
                    />
                    <button
                        className='waves-effect waves-light btn-small'
                        onClick={searchSendButton}>Search
                    </button>

                </div>
                <form action="" >
                <label>
                    <input  name="type" type="radio" value='' onChange={searchFilter} checked={type === ''}/>
                    <span>All</span>
                </label>
                <label>
                    <input  name="type" type="radio" value='movie' onChange={searchFilter} checked={type === 'movie'}/>
                    <span>Movie</span>
                </label>
                <label>
                    <input name="type" type="radio" value='series' onChange={searchFilter} checked={type === 'series'}/>
                    <span>Series</span>
                </label>
                </form>
            </div>
        )
}


export default Search;