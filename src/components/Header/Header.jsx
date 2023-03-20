import { Link } from "react-router-dom";
import "./style.css"
import { FaBars, FaMoon, FaSun } from "react-icons/fa"
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const menu = [{ name: "Home", path: '/' }, { name: "About", path: '/about' }, { name: "Login", path: '/login' }]
  const [theme, setTheme] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize()

  useEffect(() => {
    if (width > 768 && openMenu) {
      setOpenMenu(!menu)
    }
  }, [width])

  useEffect(() => {
    if (!theme) {
      document.body.style.backgroundColor = "#FFEBE0"
      document.body.style.color = "#16012B"
      document.querySelector(".bannerCard").style.boxShadow = "0px 6px 12px #A68686"
      document.body.style.transitionDuration = "1s"
    } else {
      document.body.style.backgroundColor = "#16012B"
      document.querySelector(".bannerCard").style.boxShadow = "0px 6px 5px #000000"
      document.body.style.color = "#FFEBE0"
    }
  }, [theme])


  return (
    <header className="shadow-xl navbarShadow py-5">
      <div className="flex justify-between max-w-[1280px] mx-auto px-10">
        <div>
          <Link to={"/"}>
            <img className="w-36" src="assets/Logo.png" />
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
              <button onClick={() => setTheme(!theme)} className="p-3">
                {
                  theme ? <FaMoon /> : <FaSun />
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
          <button onClick={() => setTheme(!theme)} className="p-3">
            {
              !theme ? <FaSun /> : <FaMoon />
            }
          </button>
        </nav>

      }
    </header>
  )
}

export default Header