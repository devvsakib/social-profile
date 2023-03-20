import { Link } from "react-router-dom";
import "./style.css"
import { FaMoon, FaSun } from "react-icons/fa"
import { useState } from "react";
const Header = () => {
  const menu = [{ name: "Home", path: '/' }, { name: "About", path: '/about' }, { name: "Login", path: '/login' }]
  const [theme, setTheme] = useState(true);

  return (
    <header className="shadow-xl navbarShadow py-5">
      <div className="flex justify-between max-w-[1280px] mx-auto">
        <div>
          <Link to={"/"}>
            <img className="w-36" src="assets/Logo.png" />
          </Link>
        </div>
        <nav className="flex items-center gap-10">
          <ul className="flex gap-10">
            {
              menu.map((item, idx) => (
                <li key={idx}><Link to={item.path}>{item.name}</Link></li>
              ))
            }
          </ul>
          <button onClick={() => setTheme(!theme)} className="p-3">
            {
              theme ? <FaMoon /> : <FaSun />
            }
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header