
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Videos from './components/Vedios';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Categories />
     <Videos/>
    </div>
  );
}

export default App;
