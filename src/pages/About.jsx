import Nav from '../components/Nav'
import Footer from '../components/Footer'
import coffeefoam from '../img/coffeefoam.jpg'
import coffeebeans from '../img/coffee-bean.jpg'


function About() {
    return <>
        <Nav />

        <div className="mt-30 flex justify-center flex-col sm:flex-col">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-10 mx-4 sm:mx-10 lg:mx-30">
                <h1 alt="About Us" className="text-3xl sm:text-8xl font-semibold text-[#3F3832] font-montecarlo text-center lg:text-left">About Us</h1>
                <img src={coffeefoam} alt="coffee foam" className="w-full sm:w-98 rounded-lg shadow-md" />                
            </div>

            <div className="mt-15 bg-[#FDF9E0] w-full h-full p-15">
                <h2 className="text-3xl font-semibold text-[#3F3832] font-display">Get to Know Our Story</h2>
                <p className="text-lg text-[#3F3832] font-body mt-15">At Café Souza, we believe that a great cup of coffee can change the pace of your entire day. 
                We were born from the desire to create a space where the aroma of freshly brewed coffee mingles with peaceful conversations, 
                good music, and that special kind of tranquility found only in places made with love. 
                Every drink we prepare comes with hours of careful ingredient selection, always striving for the best quality for our customers.</p>
            </div> 

            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-15 w-full p-6 sm:p-15">
                <div className="flex flex-col mt-4 lg:mt-10 mx-4 sm:mx-10 lg:mx-30">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#3F3832] font-display">Our Mission</h2>
                <p className="text-base sm:text-lg text-[#3F3832] font-body mt-6 sm:mt-15">At Café Souza, we believe that a great cup of coffee can change the pace of your entire day. 
                We were born from the desire to create a space where the aroma of freshly brewed coffee mingles with peaceful conversations, 
                good music, and that special kind of tranquility found only in places made with love. Every drink we prepare comes with hours of 
                careful ingredient selection, always striving for the best quality for our customers.</p>
                </div>
                <img src={coffeebeans} alt="Coffee Beans" className="w-full sm:w-98 rounded-lg shadow-md" />
            </div>

        </div>

        <Footer />

    </>
    }
export default About