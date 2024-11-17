import { useState } from "react";
import { Input } from "../ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp";
import { Button } from "../ui/button";
  
const Navbar = () => {
    const [isOTPSent, setIsOTPSent] = useState(false);
  return (
    <nav className="bg-white dark:bg-[rgba(25,28,31,0.75)] bg-opacity-[75%] border-b dark:border-secondary-dark transform backdrop-blur-md text-black dark:text-white z-50 sticky top-[0px] w-full h-[80px] px-6 md:px-10 flex items-center justify-between">
        <div className="text-xl font-bold ml-2 text-black dark:text-white">OpiniX</div>
        <div>
            <Input placeholder="Search opinions" className="outline-none bg-gray-100 text-sm px-6 py-3 border-0 rounded-full w-[350px]"/>
        </div>
        <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-2 font-semibold whitespace-nowrap">
                <li>
                    <a className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 p-4 transition-all">
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 p-4 transition-all">
                        <span>Opinions</span>
                    </a>
                </li>
                <li>
                    <a className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 p-4 transition-all">
                        <span>Blogs</span>
                    </a>
                </li>
            </ul>
            <div className="flex items-center gap-5">
                <div className="table">
                    <div>
                        <button className="table">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" className="dark:fill-white">
                                <path d="M256 105.5c-83.9 0-152.2 68.3-152.2 152.2 0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2c-11.3 0-20.4 9.1-20.4 20.4v22.9c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h23c11.3 0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4zM54.4 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h22.9c11.3 0 20.4-9.1 20.4-20.4.1-11.3-9.1-20.4-20.3-20.4zM400.4 82.8 384.1 99c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-8-28.8 0zM99 384.1l-16.2 16.2c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9 0zM413 384.1c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9l16.2 16.2c8 8 20.9 8 28.9 0s8-20.9 0-28.9L413 384.1zM99 127.9c8 8 20.9 8 28.9 0s8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9L99 127.9z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <Dialog>
                    <DialogTrigger>
                        <button className="px-6 py-2 border rounded-xl text-sm font-semibold bg-black dark:bg-white dark:text-black text-white whitespace-nowrap">Trade Online</button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            {isOTPSent ? (
                                <div>
                                    <DialogTitle>Verify Email</DialogTitle>
                                        <DialogDescription className="mt-2">
                                           <span>OTP has been sent to something@gmail.com</span>
                                           <div className="mt-6">
                                                <InputOTP maxLength={6}>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={0} />
                                                        <InputOTPSlot index={1} />
                                                        <InputOTPSlot index={2} />
                                                    </InputOTPGroup>
                                                    <InputOTPSeparator />
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={3} />
                                                        <InputOTPSlot index={4} />
                                                        <InputOTPSlot index={5} />
                                                    </InputOTPGroup>
                                                </InputOTP> 
                                           </div>
                                            <Button className="mt-6 w-full">Verify</Button>
                                        </DialogDescription>
                                </div>
                            ): (
                                <div>
                                    <DialogTitle>Enter your email id</DialogTitle>
                                    <DialogDescription className="mt-2">
                                        <span>We will send you an OTP</span>
                                        <Input placeholder="Enter your email" className="outline-none w-full mt-8 bg-gray-100 text-sm px-6 py-3 border-0 rounded-full"/>
                                        <p className="mt-4 text-xs">By continuing, you accept that you are 18+ years of age & agree to the Terms and Conditions</p>
                                        <Button onClick={() => setIsOTPSent(true)} className="mt-4 w-full">Get OTP</Button>
                                    </DialogDescription>
                                </div>
                            )}
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </nav>
  )
}

export default Navbar