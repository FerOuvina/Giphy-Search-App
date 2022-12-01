import './App.css'
import {Route} from "wouter";
import ListOfGifs from './components/ListOfGifs';
import InputSubmit from './components/Search';
import video from './resources/tron.mp4'

function App() {

  return (
    <div className="App">
      <div className="App__container">
        <video eo src={video} className="App__video" autoplay='' loop></video>
        <section className='main'>
          <h1 className='main__h1'>Giphy Search App</h1>
          <InputSubmit />
          <div className="main__img--container">
            <Route 
              path='/gif/:keyword' 
              component={ListOfGifs}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
export default App;
