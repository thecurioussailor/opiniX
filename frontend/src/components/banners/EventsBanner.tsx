import { Link } from "react-router-dom"

const EventsBanner = () => {
  return (
    <div className="mt-6 mb-8">
        <nav>
            <div>
                <ul className="flex">
                    <li><Link className="py-2 px-4 cursor-pointer rounded-xl hover:bg-[#00000010]" to={'/home'}><span className="text-base font-semibold">All</span></Link></li>
                    <li><Link className="py-2 px-4 cursor-pointer rounded-xl hover:bg-[#00000010]" to={'/home'}><span className="text-base font-semibold">Crypto</span></Link></li>
                    <li><Link className="py-2 px-4 cursor-pointer rounded-xl hover:bg-[#00000010]" to={'/home'}><span className="text-base font-semibold">Sports</span></Link></li>
                    <li><Link className="py-2 px-4 cursor-pointer rounded-xl hover:bg-[#00000010]" to={'/home'}><span className="text-base font-semibold">Politics</span></Link></li>
                    <li><Link className="py-2 px-4 cursor-pointer rounded-xl hover:bg-[#00000010]" to={'/home'}><span className="text-base font-semibold">Youtube</span></Link></li>
                    <li><Link className="py-2 px-4 cursor-pointer rounded-xl hover:bg-[#00000010]" to={'/home'}><span className="text-base font-semibold">100xDevs</span></Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default EventsBanner