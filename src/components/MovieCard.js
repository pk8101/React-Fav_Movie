import React from 'react';
import { addFavourites, removeFavourites } from '../actions';
class MovieCard extends React.Component {
  handleFavouriteClick=()=>{
    const{movie}=this.props;
    this.props.dispatch(addFavourites(movie))
  } 
  handleUnFavouriteClick=()=>{
    const{movie}=this.props;
    this.props.dispatch(removeFavourites(movie));
  
  } 
  render(){
    const{movie,isFavourite}=this.props;
    return ( 
    <div className="movie-card">
        <div className='left'>
            <img alt='movie-poster' src={movie.Poster}/>
        </div>
        <div className='right'>
          <div className='title'>{movie.Title}</div>
            <div className='plot'>{movie.Plot}</div>
            <div className='footer'>
                <div className='raring'>{movie.imdbRating}</div>
                {isFavourite
                ?<button className='unfavourite-btn' onClick={this.handleUnFavouriteClick} >UnFavroites</button>
                :<button className='favourite-btn' onClick={this.handleFavouriteClick} >Favroites</button>
                }
            </div>    
          </div>
    </div>
    );
  }
  
}

export default MovieCard;
