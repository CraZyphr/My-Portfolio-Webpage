import'./app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Whatiknow from './components/what i know/Whatiknow';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
      </section>
    <section id='Projects'><Parallax type="what i know"/></section>
    <section id='What I Know?'><Whatiknow/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <section id='Contact'>Contact</section>
    <section id='About'>Portfolio3</section>
  </div>;
};

export default App;
