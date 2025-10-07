import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About The Q Farm</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="icon">🌱</div>
            <h3>Sustainable Growing</h3>
            <p>
              We use advanced greenhouse technology to grow our produce sustainably,
              minimizing environmental impact while maximizing quality.
            </p>
          </div>
          <div className="about-card">
            <div className="icon">🏆</div>
            <h3>Premium Quality</h3>
            <p>
              Every cucumber and tomato is carefully monitored and harvested at
              peak ripeness to ensure exceptional taste and nutrition.
            </p>
          </div>
          <div className="about-card">
            <div className="icon">🌍</div>
            <h3>Year-Round Fresh</h3>
            <p>
              Our controlled greenhouse environment allows us to provide fresh,
              locally-grown produce throughout all seasons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
