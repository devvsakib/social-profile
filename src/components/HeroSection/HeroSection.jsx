import SPButton from "../Common/SPButton";

const HeroSection = () => {
  const social = ["twitter", "facebook", "gitHub", "linkedin", "instagram"]
  return (
    <section className="bg-[url(assets/BannerShape.png)] bg-cover bg-center mt-10 w-[85vw]">
      <div className="bg-white/5 rounded-lg  p-5 pb-10">
        <div className="text-center w-[]">
          <h1 className="font-sptitle tt text-4xl mt-5 break-words md:text-7xl">Share your Profile</h1>
          <div className="grid grid-cols-3 capitalize place-items-center justify-center my-8 gap-5">
            {
              social.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))
            }
          </div>
          <SPButton />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;