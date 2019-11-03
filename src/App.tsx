import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { useStateValue } from './StateProvider';

const App: React.FC = () => {

  const [ count, setCount ] = useState(0);

  const [ { counter }, dispatch ] = useStateValue() as any;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. # 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={ runSQL }>Read SQL</button>

        <button onClick={ ()=>{setCount(count+1)} }> { 'Count: '+count } </button>

        <button onClick={ ()=> dispatch({type:'increment'}) }> { 'Global Count: '+counter } </button>
      </header>
    </div>
  );
}

function runSQL() {

  fetch('http://localhost:8080/api/statuses')
    .then(res => res.json())
    .then(res => alert(JSON.stringify(res)));

//  setCount(count+1);
}

export default App;
