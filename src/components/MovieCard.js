import React from 'react';
class MovieCard extends React.Component {
  
  render(){
    const{movie}=this.props;
    return ( 
    <div className="Movie-Card">
        <div className='right'>
            <img alt='movie-poster' src={movie.Poster}/>
        </div>
        <div className='left'>
        <div className='title'>{movie.Title}</div>
            <div className='plot'>{movie.Plot}</div>
            <div className='footer'>
                <div className='raring'>{movie.imdbRating}</div>
                <button className='fav-btn'>ADD TO Favroites</button>
            </div>    
        </div>
    </div>
    );
  }
  
}

export default MovieCard;
