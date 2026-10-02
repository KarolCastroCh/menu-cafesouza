import { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Card from '../components/Card'
import Detalle from '../components/Detalle'
import Footer from '../components/Footer'
    
    function Menu() {
    
    const [productos, setProductos] = useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)

useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        const categorias = ['Cold Beverages', 'Coffee']  

        const productosTransformados = datos.drinks.map((bebida) => {
        const nombreMinuscula = bebida.strDrink.toLowerCase()
        const esCafe = nombreMinuscula.includes('coffee') || nombreMinuscula.includes('chocolate') || nombreMinuscula.includes('frappé') || nombreMinuscula.includes('cocoa')
    
    return {
        id: bebida.idDrink,
        nombre: bebida.strDrink,
        imagen: bebida.strDrinkThumb,
        precio: (Math.random() * 10 + 2).toFixed(2),
        categoria: esCafe ? 'Coffee' : 'Cold Beverages',
    }
})
        setProductos(productosTransformados)
        console.log(productosTransformados)
    })
}, [])

    const [categoriaActiva, setCategoriaActiva] = useState(null)
    const [ordenPrecio, setOrdenPrecio] = useState('')
    const [busqueda, setBusqueda] = useState('')

    const productosFiltrados = categoriaActiva 
    ? productos.filter((producto) => producto.categoria === categoriaActiva)
    : productos;

    const productosOrdenados = ordenPrecio === 'asc'
    ? [...productosFiltrados].sort((a, b)=> a.precio - b.precio)
    : ordenPrecio === 'desc'
    ? [...productosFiltrados].sort((a, b)=> b.precio - a.precio)
    : productosFiltrados;

    const productosFinal = busqueda
    ? productosOrdenados.filter((producto) => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    : productosOrdenados;

        return <>
    
    <div className="bg-[#C7D4DD] w-full h-full flex">   

    <Nav />

    

        <div className="flex flex-col lg:flex-row p-4 bg-[#3F3832] w-full justify-center items-center lg:gap-10 mt-20 sm:mt-30">
            <div className="text-md text-[#FDF9E0] font-body font-semibold">
                <p>Filtros</p>
                <select value={ordenPrecio} onChange={(e) => setOrdenPrecio(e.target.value)} className="bg-[#A79A8A] text-[#FDF9E0] rounded-md p-2">
                    <option value="" className="text-sm font-body font-semibold">Order by Price</option>
                    <option value="asc" className="text-sm font-body font-semibold">Low to High</option>
                    <option value="desc" className="text-sm font-body font-semibold">High to Low</option>
                </select>
            </div>
            <div className="w-full sm:w-92 h-12 bg-[#FDF9E0] rounded-full p-2 my-auto">
                <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Search..." className="border-none focus:outline-none"></input>
            </div>

            <div className="flex flex-col my-auto">
                <div className="flex flex-wrap gap-4 sm:gap-6 font-body text-[#FDF9E0] justify-center">
            <button onClick={() => setCategoriaActiva(categoriaActiva === 'Cold Beverages' ? null : 'Cold Beverages')} 
            className={`text-lg font-semibold cursor-pointer hover:scale-105 ${categoriaActiva === 'Cold Beverages' ? 'text-[#3F3832] bg-[#A79A8A] rounded-2xl p-2' : 'text-[#FDF9E0]' }`}> Cold Beverages </button>

            <button onClick={() => setCategoriaActiva(categoriaActiva === 'Coffee' ? null : 'Coffee')}
            className={`text-lg font-semibold cursor-pointer hover:scale-105 ${categoriaActiva === 'Coffee' ? 'text-[#3F3832] bg-[#A79A8A] rounded-2xl p-2' : 'text-[#FDF9E0]' }`}>Coffee</button>
            
                </div>
            </div>
        </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-4 lg:mx-10">
            {productosFinal.map((producto) => (
                <Card key={producto.id} 
                id={producto.id} 
                nombre={producto.nombre} 
                precio={producto.precio} 
                imagen={producto.imagen}
                modalDetalle={() => setProductoSeleccionado(producto.id)}
                />               
            ))}
        </div>
            {productoSeleccionado && (
            <Detalle id={productoSeleccionado} 
            onClose={() => setProductoSeleccionado(null)}
            precio={productos.find((producto) => producto.id === productoSeleccionado)?.precio} />
            )}

            <Footer />

    </>
    }
    export default Menu