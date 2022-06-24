
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardRender from './components/cardRender';
import Challenge from './components/challenges/challenges';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <Hero/>
      <CardRender/>
    </div>
  );
}

export default App;
