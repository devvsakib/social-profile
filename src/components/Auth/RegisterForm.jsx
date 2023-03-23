import { useContext, useState } from "react"
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import api from "../../API"
import { ThemeContext } from "../../context/ThemeContextProvider"
import SPButton from "../Common/SPButton"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  const [show, setShow] = useState(true)
  const navigate = useNavigate()
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

  const getUserData = (e) => {
    const { name, value } = e.target;
    if (name in user.social_media_links) {
      setUser((prevUser) => ({
        ...prevUser,
        social_media_links: {
          ...prevUser.social_media_links,
          [name]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
    if (show === false) setShow(!show)
  };

  const submitProfile = e => {
    e.preventDefault()
    if (
      user.username && user.fullname && user.password && !(user.social_media_links.github || user.social_media_links.twitter || user.social_media_links.facebook || user.social_media_links.instagram || user.social_media_links.linkedin)
    ) {
      alert("One social link is required")
    }else{

      api.post("/register", user)
        .then(res => {
          if (res.data.statusCode === 201) {
            console.log(user);
            alert("User registered successfully")
            navigate("/login")
          }else{
            alert(res.data.message)
          }
        })

    }
  }

  const showToolTip = () => {
    setShow(!show)
  }


  return (
    <section className="mt-10 w-[85vw] xxl:w-[85vw] mb-20 relative">
      <div className="bg-[url(/assets/BannerShape.png)] registerFormBG bg-cover bg-center -z-10"></div>
      <div className="rounded-lg  p-5 pb-10 shadow-white/10 shadow-lg bannerCard bg-white/5">
        <div className="text-center">
          <h1 className="font-sptitle tt text-3xl mt-5 break-words md:text-3xl">Register</h1>
          <form onSubmit={submitProfile} className="grid grid-cols-1 capitalize place-items-center justify-center my-8 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  md:justify-items-end gap-5">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" name="fullname" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} required placeholder="Full Name" onChange={e => getUserData(e)} />
                  <input type="text" name="username" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} required placeholder="Username" onChange={e => getUserData(e)} />
                  <input type="password" name="password" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} required placeholder="Password" onChange={e => getUserData(e)} />
                  <div className="relative">
                    <p className={`sp-ques-show ${show ? "hidden" : ""}`}>Copy URL From Any Social Media</p>
                    <input type="text" name="profile_picture_url" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} required placeholder="Profile Picture URL" onChange={e => getUserData(e)} />
                    <button className="sp-ques"
                      onClick={showToolTip}
                    >?</button>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-left mb-3">Social Links:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" name="github" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} placeholder="GitHub" onChange={e => getUserData(e)} />
                    <input type="text" name="twitter" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} placeholder="Twitter" onChange={e => getUserData(e)} />
                    <input type="text" name="instagram" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} placeholder="Instagram" onChange={e => getUserData(e)} />
                    <input type="text" name="facebook" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} placeholder="Facebook" onChange={e => getUserData(e)} />
                    <input type="text" name="linkedin" className={`${isDarkTheme ? "sp-inpLight" : "sp-inpDark"} `} placeholder="LinkedIn" onChange={e => getUserData(e)} />
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
            <button
            type="submit"
            >
              <SPButton content="Register" />
            </button>
            <div className="mt-5">
              <p>Already Have an Account?</p>
              <Link to="/login" className="text-blue-500">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm