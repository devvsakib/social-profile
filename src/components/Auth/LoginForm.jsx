import { Link } from "react-router-dom"
import SPButton from "../Common/SPButton"
import { useState } from "react"
import api from "../../API"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

const LoginForm = () => {
  const [_, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [user, setUser] = useState({
    username: "",
    password: "",
  })


  const setUserData = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const loginUser = (e) => {
    e.preventDefault()
    setIsLoading(true)
    api.post("/login", user)
      .then((res) => {
        if (res.data.statusCode === 200) {
          setSuccess(true)
          toast.success(res.data.message, {
            duration: 3000,
          })
          window.localStorage.setItem("userId", res.data.userId);
          window.localStorage.setItem("username", res.data.username);
          setCookies("access_token", res.data.token, { path: "/" })
          navigate(`/profile/${res.data.username}`)
        }
        else {
          setSuccess(true)
          toast.error(res.data.message, {
            duration: 3000,
          })
        }
        setIsLoading(false)
      })
  }


  return (
    <section className="bg-[url(/assets/BannerShape.png)] bg-cover bg-center mt-10 xxl:w-[85vw]">

      <div className="rounded-lg  p-5 pb-10 shadow-white/10 shadow-lg bannerCard bg-white/5">
        <div className="text-center">
          <h1 className="font-sptitle tt text-3xl mt-5 break-words md:text-3xl">Login</h1>
          <form onSubmit={loginUser} className="grid grid-cols-1 capitalize place-items-center justify-center my-8 gap-5">
            <input onChange={(e) => setUserData(e)} type="text" className={`${"sp-inpDark"} `} required placeholder="Username" name="username" />
            <input onChange={(e) => setUserData(e)} name="password" type="password" className={` sp-inpDark `} required placeholder="Password" />
            <button>
              <SPButton content="Login" isLoading={isLoading} />
            </button>
            <div className="mt-5">
              <p>New to SocialProfile?</p>
              <Link to="/register" className="text-blue-500">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm