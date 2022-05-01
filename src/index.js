import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import thunk from 'redux-thunk'
import App from './App';
import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState ={
  name:"ritik"
}

let rootReducer = (oldState,action)=>{
  let newState = oldState;
  console.log()
  switch(action.type){
    case "a":
      return {
        ...newState,
        name:"abhishek"
      }
    case "b":
      return {
        ...newState,
        name:"avinash"
      }
    case "c":
      return {
        ...newState,
        name:"kiran"
      }
      default:
        return {
          ...newState
        }
  }
}

export const changeNameActionCreator = ()=>{//Action Creator
  return{
    type:"a"
  }
}

export const changeNameAsyncActionCreator =()=>{      //async action creator
  return function(dispatch){
    // api calling karo
    //settimeout use karo
    setTimeout(function(){
      dispatch(changeNameActionCreator());
    } ,2000)
    
  }
}
let store =legacy_createStore(rootReducer,initialState,applyMiddleware(thunk))

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

