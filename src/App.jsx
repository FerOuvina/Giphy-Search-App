import './App.css'
import { useState } from 'react';
import {Link, Route} from "wouter";
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [userInput, setInput] = useState('');

  const handleUserInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <section>
        <h1>Giphy Search App</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleUserInput} />
          <Link to={`/gif/${userInput}`}><button>Search</button></Link>
        </form>

        <Route 
          path='/gif/:keyword' 
          component={ListOfGifs}
        />
      </section>
    </div>
  )
}
export default App;
