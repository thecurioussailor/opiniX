import EventsBanner from "@/components/banners/EventsBanner"
import EventCard from "@/components/cards/EventCard"

const Home = () => {
  return (
    <div className="px-10">
      <EventsBanner/>
      <EventCard/>
    </div>
  )
}

export default Home