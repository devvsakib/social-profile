import { useContext, useState } from "react"
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContextProvider"
import SPButton from "../Common/SPButton"

const RegisterForm = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    profile_picture_url: "",
    social_media_links: {
      github: "",
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  })

  const getUserData = e => {
    setUser({
      ...user, [e.target.name]: e.target.value, social_media_links: {
        ...user.social_media_links, [e.target.name]: e.target.value
      }


    })
  }
  console.log(user);




  return (
    <section className="bg-[url(/assets/BannerShape.png)] bg-cover bg-center mt-10 w-[85vw] xxl:w-[85vw] mb-20">
      <div className="rounded-lg  p-5 pb-10 shadow-white/10 shadow-lg bannerCard bg-white/5">
        <div className="text-center">
          <h1 className="font-sptitle tt text-3xl mt-5 break-words md:text-3xl">Register</h1>
          <div className="grid grid-cols-1 capitalize place-items-center justify-center my-8 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  md:justify-items-end gap-5">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" name="fullname" className="sp-inp" placeholder="Full Name" onChange={e => getUserData(e)} />
                  <input type="text" name="username" className="sp-inp" placeholder="Username" onChange={e => getUserData(e)} />
                  <input type="password" name="password" className="sp-inp" placeholder="Password" onChange={e => getUserData(e)} />
                  <input type="text" name="profile_picture_url" className="sp-inp" placeholder="Profile Picture URL" onChange={e => getUserData(e)} />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-left mb-3">Social Links:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" name="github" className="sp-inp" placeholder="GitHub"  onChange={e => getUserData(e)} />
                    <input type="text" name="twitter" className="sp-inp" placeholder="Twitter"  onChange={e => getUserData(e)} />
                    <input type="text" name="instagram" className="sp-inp" placeholder="Instagram"  onChange={e => getUserData(e)} />
                    <input type="text" name="facebook" className="sp-inp" placeholder="Facebook"  onChange={e => getUserData(e)} />
                    <input type="text" name="linkedin" className="sp-inp" placeholder="LinkedIn"  onChange={e => getUserData(e)} />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className={`overflow-hidden  rounded-xl ${!isDarkTheme ? "cardbg" : "cardbgDark"}`}>
                  <img className="h-60 object-cover w-full" src={user.profile_picture_url ? user.profile_picture_url : "/assets/NoImage.png"} alt="" />
                  <div className="px-3 pb-6">
                    <div className="flex justify-between my-5">
                      <h2 className="text-xl font-semibold">{user.fullname ? user.fullname : ""}</h2>
                    </div>
                    <div className="flex justify-center text-2xl gap-5 mt-10">
                      {
                        user.social_media_links.github ? <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.github}><FaGithub /></a> : ""
                      }
                      {
                        user.social_media_links.twitter ? <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.twitter}><FaTwitter /></a> : ""
                      }
                      {
                        user.social_media_links.facebook ? <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.facebook}><FaFacebook /></a> : ""
                      }
                      {
                        user.social_media_links.instagram ? <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.instagram}><FaInstagram /></a> : ""
                      }
                      {
                        user.social_media_links.linkedin ? <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.linkedin}><FaLinkedin /></a> : ""
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <SPButton content="Register" />
            </button>
            <div className="mt-5">
              <p>Already Have an Account?</p>
              <Link to="/login" className="text-blue-500">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm