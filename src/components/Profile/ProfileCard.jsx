import { useContext } from "react"
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContextProvider"

const ProfileCard = ({ user }) => {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div className={`overflow-hidden rounded-xl ${!isDarkTheme ? "cardbg" : "cardbgDark"}`}>
      <img className="h-60 object-cover w-full" src={user.profile_picture_url} alt="" />
      <div className="px-3 pb-6">
        <div className="flex justify-between my-5">
          <h2 className="text-xl font-semibold">{user.fullname}</h2>
          <button>
            <Link to={`/profile/${user.username}`}>View</Link>
          </button>
        </div>
        <div className="flex justify-center text-2xl gap-5 mt-10">
          <a key={"kfts"} target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.twitter}>{
            user.social_media_links?.twitter ? <FaTwitter /> : null
          }</a>
          <a key={"kfhts"} target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.facebook}>{
            user.social_media_links?.facebook ? <FaFacebook /> : null
          }</a>
          <a key={"kftas"} target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.github}>{
            user.social_media_links?.github ? <FaGithub /> : null
          }</a>
          <a key={"fddf"} target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.instagram}>{
            user.social_media_links?.instagram ? <FaInstagram /> : null
          }</a>
          <a key={"kft45s"} target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.linkedin}>{
            user.social_media_links?.linkedin ? <FaLinkedin /> : null
          }</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard