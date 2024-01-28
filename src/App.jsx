import Expertiex from "./components/Experties/Expertiex";
import Footer from "./components/Footer/Footer";
import Github from "./components/Github/Github";
import Header from "./components/Header/Header";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Video from "./components/Video/Video";
import Works from "./components/Works/Works";
import Hero from "./components/hero/Hero";
import css from './styles/app.module.scss';
import Location from './components/Location/Location';
import Quotes from './components/Quote/Quotes';
import Resume from './components/Resume/Resume'


const App = () => {
  return <div className={`bg-primary ${css.container}`}>

    <Header />
    <Hero />
    <Expertiex />
    <Works />
    <Portfolio />
    <People />
    <Video />c
    <Github />
    <Location/>
    <Quotes/>
    <Resume/>
    <Footer />
  </div>
};

export default App;
