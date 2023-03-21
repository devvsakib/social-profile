import { Link } from "react-router-dom"
import SPButton from "../Common/SPButton"

const LoginForm = () => {
  return (
    <section className="bg-[url(/assets/BannerShape.png)] bg-cover bg-center mt-10 w-[85vw]">
      <div className="rounded-lg  p-5 pb-10 shadow-white/10 shadow-lg bannerCard bg-white/5">
        <div className="text-center">
          <h1 className="font-sptitle tt text-3xl mt-5 break-words md:text-3xl">Login</h1>
          <div className="grid grid-cols-1 capitalize place-items-center justify-center my-8 gap-5">
            <input type="text" className="sp-inp" placeholder="Username" />
            <input type="password" className="sp-inp" placeholder="Password" />
            <button>
              <SPButton content="Login" />
            </button>
            <div className="mt-5">
              <p>New to SocialProfile?</p>
              <Link to="/regiter" className="text-blue-500">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm