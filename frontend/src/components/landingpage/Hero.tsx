import { SiMediafire } from "react-icons/si"
import hero from "../../images/hero.jpeg"
const Hero = () => {
  return (
    <div className="pb-20">
        <div className="flex justify-center py-16 w-full md:px-10">
            <div className="flex justify-center relative md:px-14 h-[658px] w-full rounded-lg overflow-hidden max-w-[1280px]">
                <div className={`absolute w-full`}>
                  <img className="object-cover object-center h-[658px] w-full opacity-60 blur-md" src={hero}></img>
                </div>
                <div className="relative py-16 w-full flex flex-row justify-between gap-10">
                  {/* first */}
                  <div className="flex flex-col gap-10 w-full">
                    <h1 className="text-5xl md:text-8xl font-semibold"><span className="md:text-6xl">Trade Opinions</span><br/>
                    at <span className="font-bold bg-gradient-to-r from-[#f12711] to-[#f5af19] bg-clip-text text-transparent">ZERO</span> hassle</h1>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 bg-[#f12711] rounded-lg text-xs bg-opacity-60">
                        <span className="uppercase font-bold">New</span>
                      </div>
                      <a className="">
                        Get your winnings instantly – no delays, no hassles.
                      </a>
                    </div>
                    <div className="text-gray-800 text-xl mb-4">
                      Predict outcomes and trade with the<br/> lowest fees in the market.
                    </div>
                    <div className="flex gap-4">
                      <button className="py-3 w-52 bg-black text-white rounded-md hover:scale-105 transition-all duration-300">Explore Opinions</button>
                      <button className="py-3 w-52 rounded-md border border-yellow-500 hover:bg-yellow-500">Start Trading</button>
                    </div>
                  </div>
                  {/* second */}
                  <div className="border rounded-xl w-1/2 p-5">
                    <div className="rounded-xl relative overflow-hidden">
                      <div className="absolute z-20 top-4 left-4 rounded-lg flex gap-2 items-center py-2 px-4 text-white bg-black backdrop-blur-lg bg-opacity-40">
                        <SiMediafire size={30}/>
                        <p className="font-semibold">Opinion Matters</p>
                      </div>
                      <div className="">
                        <img className="w-96 hover:scale-105 ease-in-out duration-300 transition-all" src={hero}></img>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero