import { Link } from 'react-router-dom'
import logoISO from '../img/LOGO cafesouza ISO.png'

function Footer() {

    return <>

    <div className="flex items-center p-6 bg-[#3F3832] text-white">
        <div className="flex flex-col items-center w-full">
            <img src={logoISO} alt="logo de café souza" className="w-30" />
                <div className="flex justify-between w-full mx-20">
                    <div className="flex-col">
                        <p>Instagram</p>
                        <p>Location</p>
                    </div>
                    <div className="flex-col">
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>                        
                    </div>
                </div>
                <p>© 2024 Cafe Souza</p>
        </div>
    </div>
    
    </>
    }
export default Footer