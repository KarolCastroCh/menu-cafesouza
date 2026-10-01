function Nav() {

    return <>

    <div className="absolute top-6 left-1/2 -translate-x-1/2 flex p-4 rounded-4xl bg-[#FDF9E0] shadow-md justify-between max-w-6xl w-full px-6 z-10">
        <img src="./src/img/LOGO cafesouza ISO.png" alt="logo de café souza" className="w-8" />
        <div className="flex gap-4 text-[#3F3832] font-bold font-body">
            <a className="hover:text-amber-700 cursor-pointer hover:scale-110">Home</a>
            <a className="hover:text-amber-700 cursor-pointer hover:scale-110">Menu</a>
            <a className="hover:text-amber-700 cursor-pointer hover:scale-110">About</a>
        </div>
    </div>
    
    </>
    }
export default Nav