import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="header">
        <h2 className="header-logo">Logo</h2>
        <ul className="header-nav">
            <li className="header-nav-item"><a href="#">Home</a></li>
            <li className="header-nav-item"><a href="#">About</a></li>
            <li className="header-nav-item"><a href="#">Contact</a></li>
        </ul>
        <button className="btn">Login</button>
        
    </nav>
  )
}

export default Navigation