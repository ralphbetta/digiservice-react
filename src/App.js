import BottomNav from './components/BottomNav';
import Brand from './components/Brand';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Team from './components/Team';
import CustomSlider from './components/Slider';

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Brand/>
      <About/>
      <Team/>
      <Clients/>
      <Newsletter/>
      <BottomNav />
      <Footer/>
    </div>
  );
}

export default App;
