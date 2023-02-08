import React from 'react';
import { addMovies } from '../actions';
import { handleMovieSearch } from '../actions';

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showSearchmovies:true,
      searchText:''
    }
  }
  handleAddToMovie=(movie)=>{
    this.props.dispatch(addMovies(movie))
    this.setState({
      showSearchResults:false
    })
  }
handleChange=(e)=>{
    this.setState({
      searchText:e.target.value
    })
  };
  handleSearch= ()=>{
    const{searchText}=this.state;

    this.props.dispatch( handleMovieSearch(searchText))
  };
  render(){
    
    const{result:movie,showSearchResults}=this.props.search;
    return (
      <div className="nav">
        <div className='search-container'>
        <input onChange={this.handleChange}/>
        <button type='text' id='search-btn' onClick={this.handleSearch}>Search</button>
        {showSearchResults &&
        <div className='search-results'>
          <div className='search-results'>
            <img src={movie.Poster} alt="search-pic"/>
            <div className='movie-info'>
              <span>{movie.Title}</span>
              <button onClick={()=>this.handleAddToMovie(movie)}>ADD to Movies</button>
            </div>
          </div>
          </div>}
        </div>
      </div>
    );
  }
  
}

export default Navbar;
