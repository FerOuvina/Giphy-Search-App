import './App.css'
import {Route} from "wouter";
import ListOfGifs from './components/ListOfGifs';
import InputSubmit from './components/Search';

function App() {

  return (
    <div className="App">
      <section>
        <h1>Giphy Search App</h1>
        <InputSubmit />
        <Route 
          path='/gif/:keyword' 
          component={ListOfGifs}
        />
      </section>
    </div>
  )
}
export default App;
