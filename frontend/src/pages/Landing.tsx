import Navbar from "@/components/common/Navbar"
import Announcement from "@/components/landingpage/Announcement"
import Footer from "@/components/landingpage/Footer"
import Hero from "@/components/landingpage/Hero"

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Landing