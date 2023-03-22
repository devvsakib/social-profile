import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import users from "../userdata.json"
import Layout from "../components"
import ProfileSocialList from "../components/Common/ProfileSocialList"

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
                    <ProfileSocialList
                        social={user}
                    />

                </div>
            </section>
        </Layout>
    )
}

export default Profile