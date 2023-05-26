import { useState } from "react"
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import api from "../../API"
import SPButton from "../Common/SPButton"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

const RegisterForm = () => {
  const [show, setShow] = useState(true)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    if (user.username && user.fullname && user.password && !(user.social_media_links.github || user.social_media_links.twitter || user.social_media_links.facebook || user.social_media_links.instagram || user.social_media_links.linkedin) && (!user.profile_picture_url || user.profile_picture_url)) {
      setSuccess(true)
      toast.error("Please fill atleast one social media link or profile picture", {
        duration: 3000,
        icon: "🚫",
      })
      setIsLoading(false)
    } else {
      if (!user.profile_picture_url) {
        user.profile_picture_url = "https://social-profiles.vercel.app/assets/NoImage.png"
      }
      api.post("/register", user)
        .then(res => {
          if (res.data.statusCode === 201) {
            setSuccess(true)
            toast.success(res.data.message, {
              duration: 3000,
            })
            navigate("/login")
          } else {
            setSuccess(true)
            toast.error(res.data.message, {
              duration: 3000,
            })
          }
          setIsLoading(false)
        })
    }
  }

  const showToolTip = () => {
    setShow(!show)
  }
  return (
    <section className="bg-[url(/assets/BannerShape.png)] bg-cover bg-center mt-10 xxl:w-[85vw] mb-20">
      <div className="rounded-lg bg-white/10 p-5 pb-10  bannerCard relative">
      <div className="bg-[url(/assets/BannerShape.png)] registerFormBG bg-cover bg-center -z-10"></div>
        <div className="text-center">
          <h1 className="font-sptitle tt text-3xl mt-5 break-words md:text-3xl">Register</h1>
          <form onSubmit={submitProfile} className="grid grid-cols-1 capitalize place-items-center justify-center my-8 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  md:justify-items-end gap-5">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" name="fullname" className={`${ "sp-inpDark"} `} required placeholder="Full Name" onChange={e => getUserData(e)} />
                  <input type="text" name="username" className={`${ "sp-inpDark"} `} required placeholder="Username" onChange={e => getUserData(e)} />
                  <input type="password" name="password" className={`${"sp-inpDark"} `} required placeholder="Password" onChange={e => getUserData(e)} />
                  <div className="relative">
                    <p className={`sp-ques-show ${show ? "hidden" : ""}`}>Copy URL From Any Social or Leave Blank </p>
                    <input type="text" name="profile_picture_url" className={`${ "sp-inpDark"} max-w-full `} placeholder="Profile Picture URL" onChange={e => getUserData(e)} />
                    <span className="sp-ques select-none cursor-pointer"
                      onClick={showToolTip}
                    >?</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-left mb-3">Social Links:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" name="github" className={`${ "sp-inpDark"} `} placeholder="GitHub" onChange={e => getUserData(e)} />
                    <input type="text" name="instagram" className={`${ "sp-inpDark"} `} placeholder="Instagram" onChange={e => getUserData(e)} />
                    <input type="text" name="facebook" className={`${ "sp-inpDark"} `} placeholder="Facebook" onChange={e => getUserData(e)} />
                    <input type="text" name="linkedin" className={`${ "sp-inpDark"} `} placeholder="LinkedIn" onChange={e => getUserData(e)} />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className={`overflow-hidden  rounded-xl cardbgDark`}>
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
              <SPButton content="Register" isLoading={isLoading} />
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