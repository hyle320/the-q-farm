import '../styles/Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>The Q Farm</h1>
          <p className="tagline">Fresh from our greenhouse</p>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
