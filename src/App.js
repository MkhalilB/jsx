import './App.css';
import BasicExample from './compo/Nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './compo/PlayerList.js';


function App() {
  return (
    <div className="App">
      <BasicExample/>
     <PlayerList/>
      
    </div>
  );
}

export default App
