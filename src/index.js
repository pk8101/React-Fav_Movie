import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import './index.css';
import App from './components/App'; 
import rootReducer from './reducers';


// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){


//       next(next);
//     }
//   }
// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  next(action);
}


const store = createStore(rootReducer,applyMiddleware(logger));
// console.log("store",store.getState())
// store.dispatch({
//    type:'ADD_MOVIES',
//    movies:[{name:'superman '}]
// })
// console.log("store",store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

