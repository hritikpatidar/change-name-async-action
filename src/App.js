
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameAsyncActionCreator } from '.';

function App() {
  //1.stoer
   // let state = useSelector((state)=>{
  //   return state
  // })

  let state = useSelector(store=>store);
  //console.log(state.name);

  let dispatch = useDispatch()



  //2. function defination

  

  return (
    <div className="App">
      <h1>{state.name}</h1>
     
      {/* {console.log(state.name)} */}
      <button onClick={ (e)=>{ dispatch(changeNameAsyncActionCreator()) }}>change Name</button>
    </div>
  );
}

export default App;
