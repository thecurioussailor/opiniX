import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="w-full p-8 lg:p-20 bg-gray-50">
        <div className="flex justify-between lg:gap-56">
            <div className="">
                <div>
                    <div className="mb-4">
                        <h1 className="text-2xl">OpiniX</h1>
                    </div>
                    <div className="md:max-w-96 \">
                        <p className="text-justify">
                            A next-generation platform to trade opinions on Sports, Entertainment, Economy, and more. 
                            Predict outcomes, engage with the market, and unlock new ways to profit. 
                            Start trading or explore the opportunities today!
                        </p>
                    </div>
                </div>
                <div className="flex justify-left mt-6 gap-4">
                    <div>
                        <a>
                            <button className="flex justify-center items-center border-2 border-gray-400 text-gray-400 hover:text-black cursor-pointer rounded-md w-14 h-14">
                                <FaXTwitter size={30}/>
                            </button>
                            
                        </a>
                    </div>
                    <div>
                        <a>
                            <button className="flex justify-center items-center border-2 border-gray-400 text-gray-400 hover:text-black cursor-pointer rounded-md w-14 h-14">
                                <FaInstagram size={30}/>
                            </button>
                        </a>

                    </div>
                    <div>
                        <a>
                            <button className="flex justify-center items-center border-2 border-gray-400 text-gray-400 hover:text-black cursor-pointer rounded-md w-14 h-14">
                                <FaYoutube size={30}/>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a>
                            <button className="flex justify-center items-center border-2 border-gray-400 text-gray-400 hover:text-black cursor-pointer rounded-md w-14 h-14">
                                <FaDiscord size={30}/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* second */}
            <div className="flex lg:gap-32 mb-20">
                <div className="tracking-wide">
                    <h3 className="font-semibold text-lg mb-6">Explore</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a>Opinion Market</a>
                        </li>
                        <li>
                            <a>Opinion Market</a>
                        </li>
                    </ul>
                </div>
                <div className="tracking-wide">
                    <h3 className="font-semibold text-lg mb-6">Company</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Culture</a>
                        </li>
                        <li>
                            <a>Career</a>
                        </li>
                    </ul>
                </div>
                <div className="tracking-wide">
                    <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a>help@opinix.com</a>
                        </li>
                        <li>
                            <a>support@opinix.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-10 pt-10 border-t">
            <p>© 2024 OpiniX Inc. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer