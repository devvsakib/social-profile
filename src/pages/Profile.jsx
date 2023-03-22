import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"
import users from "../userdata.json"
import Layout from "../components"

const Profile = () => {
    const { name } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        const findeUser = users.find(user => user.username === name)
        setUser(findeUser)
    }, [name])
    return (
        <Layout>
            <section className="my-20 mt-10">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Profile {user.fullname}</h1>
                    <div className="mx-auto rounded-full overflow-hidden w-5/12 md:w-2/12 my-6">
                        <img className="w-full" src={user.profile_picture_url} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{user.fullname}</h1>
                        <p className="text-gray-500">{user.username}</p>
                    </div>
                    <div className="flex flex-col text-2xl gap-5 mt-10">

                        {
                            user.social_media_links?.twitter && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={user.social_media_links?.twitter}>
                                <div className="w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                                    <FaTwitter />
                                    <p>Twitter</p>
                                </div>
                            </a>
                        }
                        {
                            user.social_media_links?.github && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={user.social_media_links?.github}>
                                <div className="w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                                    <FaGithub />
                                    <p>GitHub</p>
                                </div>
                            </a>
                        }
                        {
                            user.social_media_links?.instagram && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={user.social_media_links?.instagram}>
                                <div className="w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                                    <FaInstagram />
                                    <p>Instagram</p>
                                </div>
                            </a>
                        }
                        {
                            user.social_media_links?.facebook && <a target={'_blank'} className="hover:text-[#2affa6] transition-all duration-200 bg-cover bg-center py-5 bg-[url(/assets/BannerShape.png)] ease-linear" href={user.social_media_links?.facebook}>
                                <div className="w-2/4 bg-white/10 flex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                                    <FaFacebook />
                                    <p>Facebook</p>
                                </div>
                            </a>
                        }
                        {
                            user.social_media_links?.linkedin &&
                            <a target={'_blank'} className="hover:text-[#2affa6] transition-bg-cover bg-center py-5 all duration-200 bg-[url(/assets/BannerShape.png)] ease-linear" href={user.social_media_links?.linkedin}>
                                <div className="w-2/4 bg-white/3010lex items-center justify-between gap-5 px-10 py-5 rounded-md mx-auto">
                                    <FaLinkedin />
                                    <p>Linkedin</p>
                                </div>
                            </a>
                        }
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default Profile