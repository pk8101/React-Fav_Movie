import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import {data} from '../data';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    store.dispatch({
      type:"ADD_MOVIES",
      movies:data
    })
  }
  render(){
  const movies=this.props.store.getState();
  return (
      <div className="App">
        <Navbar/>
        <div className='main'>
            <div className='tabs'>
              <div className='tab'>Movies</div>
              <div className='tab'>Favroites</div>
            </div>
        </div>
        <div className='list'>
         {movies.map((movie,index)=>(
             <MovieCard movie={movie}
             key={`movies-${index}`}
             />))
            }
       </div>
      </div>
    );
  }
}


export default App;
