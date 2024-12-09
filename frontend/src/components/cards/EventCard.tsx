import hero from "../../images/hero.jpeg"
const EventCard = () => {
  return (
    <div className="w-64 h-80 rounded-lg border">
        <div className="h-44 overflow-hidden rounded-t-lg">
            <img src={hero}/>
        </div>
        <div className="flex flex-col p-4">
            <div className="pb-2">
                <h1>India to win the 2nd Test vs Australia?</h1>
            </div>
            <div className="flex justify-between gap-2">
                <button className="w-full bg-green-300 rounded-lg">yes</button>
                <button className="w-full bg-red-400 py-2 rounded-lg">no</button>
            </div>
        </div>
    </div>
  )
}

export default EventCard