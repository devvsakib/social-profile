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
                    <div className="flex justify-center text-2xl gap-5 mt-10">
                        <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.twitter}><FaTwitter /></a>
                        <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.facebook}><FaFacebook /></a>
                        <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.github}><FaGithub /></a>
                        <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.instagram}><FaInstagram /></a>
                        <a target={'_blank'} className="hover:text-[#1E0101] transition-all duration-200 ease-linear" href={user.social_media_links?.linkedin}><FaLinkedin /></a>
                    </div>
                   
                </div>
            </section>
        </Layout>
    )
}

export default Profile