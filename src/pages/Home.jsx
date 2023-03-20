import HeroSection from "../components/HeroSection/HeroSection.jsx"
import ProfileCard from "../components/Profile/ProfileCard.jsx"
import users from "../userdata.json"
const Home = () => {
    return (
        <section className="">
            <HeroSection />
            <section className="my-32 bg-[url(/assets/TopProfileShape.png)] bg-center bg-cover">
                <div>
                    <h2 className="text-xl font-semibold">Top Profiles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
                    {
                        users ? users.slice(0,3).map((user, idx)=>(
                            <ProfileCard 
                                user={user}
                                id={idx}
                            />
                            )) : <h2>No Top Profile yet</h2>

                    }
                </div>
            </section>
            <section className="my-32 bg-[url(/assets/ProfileShape.png)] bg-center bg-cover">
                <div>
                    <h2 className="text-xl font-semibold">Profiles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
                    {
                        users ? users.map((user, idx)=>(
                            <ProfileCard 
                                user={user}
                                id={idx}
                            />
                            )) : <h2>No Top Profile yet</h2>

                    }
                </div>
            </section>
        </section>
    )
}

export default Home