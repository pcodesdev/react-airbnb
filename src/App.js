
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardRender from './components/cardRender';
// import Practice from './components/Practice';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <CardRender/>
      {/* <Practice/> */}
    </div>
  );
}

export default App;
