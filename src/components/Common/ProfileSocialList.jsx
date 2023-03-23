import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContextProvider"

const ProfileSocialList = ({ social }) => {
    const { isDarkTheme } = useContext(ThemeContext)

    return (
        <div className="flex flex-col text-2xl gap-5 mt-10">

            {
                social.social_media_links?.twitter && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.twitter}>
                    <div className={`${!isDarkTheme ? "sp-listDark" : "sp-listLight"}`}>
                        <FaTwitter />
                        <p>Twitter</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.github && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.github}>
                    <div className={`${!isDarkTheme ? "sp-listDark" : "sp-listLight"}`}>
                        <FaGithub />
                        <p>GitHub</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.instagram && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.instagram}>
                    <div className={`${!isDarkTheme ? "sp-listDark" : "sp-listLight"}`}>
                        <FaInstagram />
                        <p>Instagram</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.facebook && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.facebook}>
                    <div className={`${!isDarkTheme ? "sp-listDark" : "sp-listLight"}`}>
                        <FaFacebook />
                        <p>Facebook</p>
                    </div>
                </a>
            }
            {
                social.social_media_links?.linkedin && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={social.social_media_links?.linkedin}>
                    <div className={`${!isDarkTheme ? "sp-listDark" : "sp-listLight"}`}>
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </div>
                </a>
            }
        </div>
    )
}

export default ProfileSocialList