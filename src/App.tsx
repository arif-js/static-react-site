import './App.css';
import Banner from 'src/components/Banner/index';
import Header from 'src/components/Header';
import TopAlert from 'src/components/TopAlert/index';
import About from './components/About';
import Analysis from './components/Analysis';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <TopAlert />
      <Header />
      <Banner />
      <About />
      <Analysis />
      <Footer />
    </div>
  );
}

export default App;
