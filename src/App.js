import BottomNav from './components/BottomNav';
import Brand from './components/Brand';
import Clients from './components/Clients';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Newsletter from './components/Newsletter';
import Offer from './components/Offer';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Brand/>
      <Offer/>
      <Team/>
      <Clients/>
      <Newsletter/>
      <BottomNav />
    </div>
  );
}

export default App;
