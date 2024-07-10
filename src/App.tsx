import './App.css';
import About from './components/about';
import Home from './components/home';
import Navigation from './components/navigation';
import Roadmap from './components/roadmap';

function App() {
  return (
    <main>
      <Navigation />
      <Home />
      <div className="container">
        <About />
        <Roadmap />
      </div>
    </main>
  );
}

export default App;
