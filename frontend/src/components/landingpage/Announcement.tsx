const Announcement = () => {
  return (
    <div>
        <div className="bg-black dark:bg-[#2b2b2d] transition-all text-white w-full text-sm flex items-center gap-4 px-10 py-2 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" xmlSpace="preserve" width="20" className="fill-white dark:fill-dark">
                <path d="m22.7 45.4-1.3-1c-1.4-1-1.4-3-1.4-4v-2.9c0-.8-.7-1.5-1.5-1.5h-6c-.8 0-1.5.7-1.5 1.5v7.7c0 2.7 1.6 4.8 4.1 4.8H20c2.9 0 3.1-2 3.1-2s.5-1.8-.4-2.6zM45 18V4.3c0-2.4-3-3.1-4.6-1.5l-8.9 8.4c-1.4 1.2-3.2 1.7-5 1.7H11.3C6.1 13 2 17.5 2 22.7v.2c0 5.2 4.1 9.1 9.3 9.1h15.2c1.9 0 3.7.8 5.1 2l8.8 8.6c1.6 1.6 4.6 1 4.6-1.4V27.6c3 0 4.8-2.1 4.8-4.8 0-2.7-1.8-4.8-4.8-4.8z"></path>
            </svg>
            <div className="flex gap-3 items-center flex-1">
                <div>For individuals aged 18 and above – Trade responsibly and confidently on our platform.</div>
            </div>
        </div>
    </div>
  )
}

export default Announcement