import './App.css';
import About from './components/about';
import Home from './components/home';
import Navigation from './components/navigation';

function App() {
  return (
    <main>
      <Navigation />
      <Home />
      <div className="container">
        <About />
      </div>
    </main>
  );
}

export default App;
