import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../API"
import Layout from "../components"
import ProfileSocialList from "../components/Common/ProfileSocialList"
import { ThemeContext } from '../context/ThemeContextProvider'
import toast, { Toaster } from "react-hot-toast"

const Profile = () => {
    const { isDarkTheme } = useContext(ThemeContext)
    const { username } = useParams()
    const [user, setUser] = useState({})
    const [loggedUser, setLoggedUser] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.get(`/user/${username}`)
            .then(res => {
                if (res.data.username === username) {
                    setUser(res.data)
                    setLoading(false)
                } else {
                    alert(res.data.message);
                }
            })
    }, [])

    useEffect(() => {
        const user = localStorage.getItem("username")
        if (user) {
            setLoggedUser(user)
        }

    }, [])

    const showToast = () => {
        toast.success("Feature Coming Soon...")
    }

    return (
        <Layout>
            <section className={`my-20 mt-10 ${isDarkTheme ? "text-[#1E0101]" : "text-[#FFEBE0]"}`}>
                <Toaster />
                {
                    loading ? <h1>Loading...</h1> : (

                        <div className="text-center">
                            {
                                loggedUser && loggedUser === user.username && (
                                    <div className="flex justify-end">
                                        <button onClick={showToast} className="bg-[#FFEBE0] text-[#1E0101] px-4 py-2 rounded-md">Edit Profile</button>
                                    </div>
                                )
                            }
                            {
                              loggedUser && loggedUser === user.username ?
                                <h1 className="text-2xl font-bold">My Profile</h1> :
                                <h1 className="text-2xl font-bold">Profile {user.fullname}</h1>
                                
                            }
                            <div className="mx-auto rounded-full overflow-hidden w-5/12 md:w-2/12 my-6">
                                <img className="w-full" src={user.profile_picture_url} alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{user.fullname}</h1>
                                <p className="text-gray-500">{user.username}</p>
                            </div>
                            <ProfileSocialList
                                social={user}
                            />
                        </div>
                    )
                }
            </section>
        </Layout>
    )
}

export default Profile