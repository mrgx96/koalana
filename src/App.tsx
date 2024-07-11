import './App.css';
import About from './components/about';
import Home from './components/home';
import Navigation from './components/navigation';
import Roadmap from './components/roadmap';
import Tokenomics from './components/tokenomics';

function App() {
  return (
    <main>
      <Navigation />
      <Home />
      <div className="container">
        <About />
        <Roadmap />
        <Tokenomics />
      </div>
    </main>
  );
}

export default App;
