import './Home.css';
import Header from '../components/Header';
import FixturesCarousel from '../components/FixturesCarousel'

export default function Home() {
  return (
    <div className="Home">
      <Header/> 
      <div className="carousel-container">
        <FixturesCarousel/> 
        </div>
    </div>
  );
}


