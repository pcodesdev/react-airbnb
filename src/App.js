
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardRender from './components/cardRender';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <Hero/>
      <CardRender/>
      <Footer/>
    </div>
  );
}

export default App;
