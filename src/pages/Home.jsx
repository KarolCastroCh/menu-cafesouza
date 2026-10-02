import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Detalle from '../components/Detalle'
import { Link } from 'react-router-dom'
import coffeeTexture from '../img/coffe-texture.png'
import logoBlanco from '../img/LOGO cafesouza blanco.png'
import Pie from '../img/Pie.png'
import CoffeeBeans from '../img/Coffee Beans.png'
import CoffeeMaker from '../img/Coffee Maker.png'
import CoffeeCup from '../img/Coffee cup.png'
import BorderFX from '../img/bordefx.png'


function Home() {

    const [destacados, setDestacados] = useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                const destacadosBebidas = [...datos.drinks]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((bebida) => ({
        id: bebida.idDrink,
        nombre: bebida.strDrink,
        imagen: bebida.strDrinkThumb,
        precio: (Math.random() * 10 + 2).toFixed(2),
        
        }))
                setDestacados(destacadosBebidas)
            })
    }, [])


    return (
    <>

<div className="relative overflow-hidden ">

    <Nav />

    <div className="bg-[#3F3832] grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-screen lg:h-180">    
        <div className="p-6 flex flex-col items-center gap-4 sm:gap-10 mt-24 sm:mt-50">
            <h1 className="text-8xl sm:text-6xl lg:text-8xl  text-[#FDF9E0] text-center font-montecarlo">Café Souza</h1>
            <p className="text-[#FDF9E0] sm:text-2xl p-2 sm:p-6 text-2xl font-display">Enjoy every sip of life.</p>
            <Link to="/menu" className="justify-center bg-[#FDF9E0] text-[#3F3832] cursor-pointer hover:bg-white hover:text-[#A79A8A] hover:border-[#A79A8A] hover:border-2 rounded-full p-4 font-body font-semibold w-auto px-8">MENU</Link>
        </div>
       <div className="relative sm:h-96 lg:h-auto">
    <img src={coffeeTexture} alt="café souza" className="w-full h-full object-cover"/>
    <img src={logoBlanco} alt="café souza" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 sm:w-1/2"/>
        </div>       
    </div>

</div>

        <div className="flex flex-col p-4 bg-[#C7D4DD] w-full items-center gap-6 my-20">
            <h2 className="text-xl font-bold text-[#3F3832] font-body mb-12">FEATURED</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {destacados.map((producto) => (
                    <Card 
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        imagen={producto.imagen}
                        modalDetalle={() => setProductoSeleccionado(producto.id)}
                    />
                ))}
            </div>
        </div>
        {productoSeleccionado && (
            <Detalle id={productoSeleccionado} 
            onClose={() => setProductoSeleccionado(null)}
            precio={destacados.find((producto) => producto.id === productoSeleccionado)?.precio} />
            )}

        <div  className="bg-[#FDF9E0] flex flex-col p-4 w-full items-center gap-6 py-20">
            <h2 className="text-xl font-bold text-[#3F3832] font-body mb-12">WHY US?</h2>

            <div className="w-full max-w-3xl mx-auto bg-contain bg-no-repeat bg-center py-16 px-8"
        style={{ backgroundImage: "url('" + BorderFX + "')" }}>

            <div className="flex flex-col sm:gap-8 items-center h-full my-6 mx-4 sm:mx-20 lg:mx-40">
                <div className="flex items-center justify-between w-full">
                <img src={Pie} alt="Postre icono" className="w-8" />
                <p className="font-body font-semibold lg:text-base sm:text-sm">DRINKS WITH THE BEST INGREDIENTS</p>
                </div>

            <div className="flex items-center justify-between w-full">
                <p className="font-body font-semibold lg:text-base sm:text-sm">COFFEE OF THE HIGHEST QUALITY</p>
                <img src={CoffeeBeans} alt="Postre icono" className="w-8" />
            </div>

            <div className="flex items-center justify-between w-full">
                <img src={CoffeeMaker} alt="Postre icono" className="w-8" />
                <p className="font-body font-semibold lg:text-base sm:text-sm">HOT AND COLD DRINKS</p>
            </div>

            <div className="flex items-center justify-between w-full">
                <p className="font-body font-semibold lg:text-base sm:text-sm">HANDMADE AND NATURAL DRINKS</p>
                <img src={CoffeeCup} alt="Postre icono" className="w-8" />
            </div>
            </div>
            </div>
        </div>

        <Footer />
    
    </>
)
}

export default Home