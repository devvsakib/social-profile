import { Link } from "react-router-dom";
import "./style.css"
import { FaBars, FaMoon, FaSun } from "react-icons/fa"
import { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Header = () => {
  const menu = [{ name: "Home", path: '/' }, { name: "About", path: '/about' }, { name: "Login", path: '/login' }]
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize()
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (width > 768 && openMenu) {
      setOpenMenu(!menu)
    }
  }, [width])

  return (
    <header className={`${isDarkTheme ? 'bg-[#F3E8FF]' : ''} shadow-xl navbarShadow py-2`}>
      <div className="flex justify-between max-w-[1280px] mx-auto px-10">
        <div>
          <Link to={"/"}>
            <img className="w-36" src={isDarkTheme ? "assets/LogoDark.png" : "assets/Logo.png"} />
          </Link>
        </div>
        {
          width < 768 ?
            <button onClick={() => setOpenMenu(!openMenu)}>
              <FaBars />
            </button>
            :
            <nav className="flex items-center gap-10">
              <ul className="flex gap-10">
                {
                  menu.map((item, idx) => (
                    <li key={idx}><Link to={item.path}>{item.name}</Link></li>
                  ))
                }
              </ul>
              <button onClick={toggleTheme} className="p-3">
                {
                  isDarkTheme ? <FaMoon /> : <FaSun />
                }
              </button>
            </nav>
        }
      </div>


      {/* Mobile menu */}

      {
        width < 768 && openMenu && <nav className="ml-auto mr-10 mt-2 py-5 flex px-5 spmobile-nav flex-col gap-5 w-[40%]">
          <ul className="flex gap-5 flex-col">
            {
              menu.map((item, idx) => (
                <li key={idx}><Link to={item.path}>{item.name}</Link></li>
              ))
            }
          </ul>
          <button onClick={toggleTheme} className="p-3">
            {
              !isDarkTheme ? <FaSun /> : <FaMoon />
            }
          </button>
        </nav>

      }
    </header>
  )
}

export default Header