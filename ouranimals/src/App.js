import logo from './logo.svg';
import './App.css';
import OurAnimals from './component/OurAnimals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
          <OurAnimals></OurAnimals>
        </div>
      </header>
    </div>
  );
}

export default App;
