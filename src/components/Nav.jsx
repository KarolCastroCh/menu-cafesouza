import { Link } from 'react-router-dom'

function Nav() {

    return <>

    <div className="absolute top-3 sm:top-6 left-1/2 -translate-x-1/2 flex p-3 sm:p-4 rounded-4xl bg-[#FDF9E0] shadow-md justify-between max-w-6xl w-[90%] sm:w-full px-4 sm:px-6 z-10">
        <img src="./src/img/LOGO cafesouza ISO.png" alt="logo de café souza" className="w-6 sm:w-8" />
        <div className="flex gap-2 sm:gap-4 text-[#3F3832] font-bold font-body text-sm sm:text-base">
            <Link to="/" className="hover:text-amber-700 cursor-pointer hover:scale-110">Home</Link>
            <Link to="/menu" className="hover:text-amber-700 cursor-pointer hover:scale-110">Menu</Link>
            <Link to="/about" className="hover:text-amber-700 cursor-pointer hover:scale-110">About</Link>
        </div>
    </div>
    
    </>
    }
export default Nav