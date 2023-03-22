import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

const ProfileSocialList = ({ social }) => {
    return (
        <div className="flex flex-col text-2xl gap-5 mt-10">

            {
                social.social_media_links?.twitter && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.twitter}>
                    <div className="md:w-2/4 md:md:w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                        <FaTwitter />
                        <p>Twitter</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.github && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.github}>
                    <div className="md:w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                        <FaGithub />
                        <p>GitHub</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.instagram && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.instagram}>
                    <div className="md:w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                        <FaInstagram />
                        <p>Instagram</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.facebook && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.facebook}>
                    <div className="md:w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                        <FaFacebook />
                        <p>Facebook</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.linkedin && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.linkedin}>
                    <div className="md:w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </div>
                </a>
            }
        </div>
    )
}

export default ProfileSocialList