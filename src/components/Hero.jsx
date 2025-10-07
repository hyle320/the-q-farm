import greenhouseSvg from '../assets/images/greenhouse.svg';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to The Q Farm</h1>
          <p className="hero-description">
            Experience the finest greenhouse-grown cucumbers and tomatoes,
            cultivated with care and passion. Our sustainable farming practices
            ensure the freshest, most flavorful produce year-round.
          </p>
          <button className="cta-button" onClick={() => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
          }}>
            View Our Products
          </button>
        </div>
        <div className="hero-image">
          <img src={greenhouseSvg} alt="The Q Farm Greenhouse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
