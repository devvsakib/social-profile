import HeroSection from "../components/HeroSection/HeroSection.jsx"
import ProfileCard from "../components/Profile/ProfileCard.jsx"
import users from "../userdata.json"
import Layout from "../components";
import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState(users)
    const [shuffledUsers, setShuffledUsers] = useState([...users].sort(() => Math.random() - 0.5).slice(0, 3))

    return (
        <Layout>
            <HeroSection />
            <section className="my-32 bg-center bg-cover">
                <div className="bg-[url(/assets/TopProfileShape.png)] bg-no-repeat bg-cover tpProfileBG"></div>
                <div>
                    <h2 className="text-xl font-semibold">Top Profiles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {
                        shuffledUsers ? shuffledUsers.map((user, idx) => (
                            <ProfileCard
                                user={user}
                                id={idx}
                            />
                        )) : <h2>No Top Profile yet</h2>

                    }
                </div>
            </section>
            <section className="my-32 bg-center bg-cover relative">
                <div className="bg-[url(/assets/TopProfileShape.png)] bg-no-repeat bg-cover ProfileBG"></div>
                <div>
                    <h2 className="text-xl font-semibold">Profiles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
                    {
                        user ? user.map((user, idx) => (
                            <ProfileCard
                                user={user}
                                id={idx}
                            />
                        )) : <h2>No Profile yet</h2>

                    }
                </div>
            </section>
        </Layout>
    )
}

export default Home