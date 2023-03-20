import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const ProfileCard = ({ user, id }) => {
  return (
    <div key={id} className="w-6/6 overflow-hidden rounded-lg cardbg">
      <img className="h-60 object-cover w-full" src={user.profile_picture_url} alt="" />
      <div className="px-3 pb-6">
        <div className="flex justify-between my-5">
          <h2 className="text-xl font-semibold">{user.fullname}</h2>
          <button>
            <Link>View</Link>
          </button>
        </div>
        <div className="flex justify-center text-2xl gap-5 mt-10">
          <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.twitter}><FaTwitter /></a>
          <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.facebook}><FaFacebook /></a>
          <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.github}><FaGithub /></a>
          <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.instagram}><FaInstagram /></a>
          <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links.linkedin}><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard