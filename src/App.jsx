import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThemeContextProvider from "./context/ThemeContextProvider";


function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        <Footer />
      </ThemeContextProvider>
    </div>
  )
}

export default App
