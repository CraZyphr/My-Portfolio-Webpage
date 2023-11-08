import'./app.scss'
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Whatiknow from './components/what i know/Whatiknow';

const App = () => {
  return <div>
    <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
      </section>
    <section id='Projects'><Parallax type="what i know"/></section>
    <section id='What I Know?'><Whatiknow/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Contact'><Contact/></section>
  </div>;
};

export default App;
