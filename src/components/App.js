import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import {data} from '../data';
import 'bootstrap/dist/css/bootstrap.css';
import {  addMovies, showFavourites  } from '../actions';

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    store.dispatch(addMovies (data));
  }
  isMovieFavourite=(movie)=>{
    const{movies}=this.props.store.getState();
    const index=movies.favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }
    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(showFavourites(val))
  }
  render(){
  const{movies,search}=this.props.store.getState();
  const {list,favourites,showFavourites}=movies;
  const display=showFavourites? favourites:list;
  return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch}
        search={search}/>
        <div className='main'>
            <div className='tabs'>
              <div className={`tab ${showFavourites ?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
                <div className={`tab ${showFavourites ?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favorites</div>
            </div>
        <div className='list'>
         {display.map((movie,index)=>(
             <MovieCard movie={movie}
             key={`movies-${index}`}
             dispatch={this.props.store.dispatch}
             isFavourite={this.isMovieFavourite(movie)}
             />))
            }
        </div>
           {display.length===0?<div className='no-movies'>No Movies Display!</div>:null}
       </div>
     </div>
    );
  }
}


export default App;
