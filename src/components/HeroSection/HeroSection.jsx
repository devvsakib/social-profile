import { Link } from "react-router-dom";
import SPButton from "../Common/SPButton";

const HeroSection = () => {
  const social = ["twitter", "facebook", "gitHub", "linkedin", "instagram"]
  return (
    <section className="bg-[url(/assets/BannerShape.png)] bg-cover bg-center mt-10 xxl:w-[85vw]">
      <div className="rounded-lg  p-5 pb-10 bannerCard">
        <div className="text-center w-[]">
          <h1 className="font-sptitle tt text-4xl mt-5 break-words md:text-7xl">Share your Profile</h1>
          <div className="grid grid-cols-3 capitalize place-items-center justify-center my-8 gap-5">
            {
              social.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))
            }
          </div>
          <Link to={"/login"}>
            <SPButton />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;