import axios from 'axios';
import HeroSection from "../components/HeroSection/HeroSection.jsx"
import ProfileCard from "../components/Profile/ProfileCard.jsx"
import users from "../userdata.json"
import Layout from "../components";
import { useEffect, useState } from "react";
import api from "../API";

const Home = () => {
    const [user, setUser] = useState([])
    const [shuffledUsers, setShuffledUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.get('/users')
            .then(res => {
                setUser(res.data)
                setShuffledUsers([...res.data].sort(() => Math.random() - 0.5).slice(0, 3))
                setLoading(false)
            })
            .catch(err => {
                // console.log(err)
            })
    }, [])


    return (
        <Layout>
            <HeroSection />
            <section className="my-32 bg-center bg-cover z-10">
                <div className="bg-[url(/assets/TopProfileShape.png)] bg-no-repeat bg-cover tpProfileBG -z-10"></div>
                <div>
                    <h2 className="text-xl font-semibold">Top Profiles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {
                        loading ? "Loading" :
                            (shuffledUsers ? shuffledUsers.map((user, idx) => (
                                <ProfileCard
                                    user={user}
                                    key={idx}
                                />
                            )) : <h2>No Top Profile yet</h2>)

                    }
                </div>
            </section>
            <section className="my-32 bg-center bg-cover relative z-10">
                <div className="bg-[url(/assets/TopProfileShape.png)] bg-no-repeat bg-cover ProfileBG -z-10"></div>
                <div>
                    <h2 className="text-xl font-semibold">Profiles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                    {
                        loading ? "Loading" :
                            (user ? user.map((user, idx) => (
                                <ProfileCard
                                    user={user}
                                    key={idx}
                                />
                            )) : <h2>No Profile Found</h2>)
                    }
                </div>
            </section>
        </Layout>
    )
}

export default Home