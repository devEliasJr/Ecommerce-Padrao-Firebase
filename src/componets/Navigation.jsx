import "./Navigation.css"

const Navigation = () => {
  return (
    <header>
      <nav className="header-container">
          <h2 className="header-logo">Logo</h2>
          <ul className="header-nav">
              <li className="header-nav-item"><a href="#">Home</a></li>
              <li className="header-nav-item"><a href="#">About</a></li>
              <li className="header-nav-item"><a href="#">Contact</a></li>
          </ul>
          <button className="btn"><a href="#">Login</a></button>      
      </nav>
    </header>
  )
}

export default Navigation