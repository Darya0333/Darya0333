const Menu = () => {
    return (
        <div className="fixed w-full h-24 backdrop-blur z-50 px-6 py-4 text-white flex items-center justify-end shadow gap-7">
            <div className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">HOME</div>
            <div className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">ABOUT ME</div>
            <div className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">PROJECTS</div>
            <div className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">CERTIFICATION</div>
            <div className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">CONTACTS</div>
        </div>
    )
}

export default Menu;