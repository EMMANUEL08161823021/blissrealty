// import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar';
import Hero from '../src/components/hero/hero';
import Searchbar from '../src/components/searchbar/searchbar';
import Popular from './components/Popular/popular';
import Services from '../src/components/services/services';
import Blog from '../src/components/blog/blog';
import Testimonials from '../src/components/testimonials/testimonials';
import Questions from '../src/components/questions/questions';
import Footer from '../src/components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Searchbar/> 
      <Popular/>
      <Services/>
      <Blog/>
      <Testimonials/>
      <Questions/>
      <Footer/>

    </div>
  );
}

export default App;
