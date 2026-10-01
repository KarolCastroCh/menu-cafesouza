import { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Card from '../components/Card'
import Detalle from '../components/Detalle'
    
    function Menu() {
    
    const [productos, setProductos] = useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)

useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        const categorias = ['Bebidas Frías', 'Cafés']  

        const productosTransformados = datos.drinks.map((bebida) => {
        const nombreMinuscula = bebida.strDrink.toLowerCase()
        const esCafe = nombreMinuscula.includes('coffee') || nombreMinuscula.includes('chocolate') || nombreMinuscula.includes('frappé') || nombreMinuscula.includes('cocoa')
    
    return {
        id: bebida.idDrink,
        nombre: bebida.strDrink,
        imagen: bebida.strDrinkThumb,
        precio: (Math.random() * 10 + 2).toFixed(2),
        categoria: esCafe ? 'Cafés' : 'Bebidas Frías',
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

    

        <div className="flex p-4 bg-[#3F3832] w-full justify-center gap-10 mt-30">
            <div className="text-md text-[#FDF9E0] font-body font-semibold">
                <p>Filtros</p>
                <select value={ordenPrecio} onChange={(e) => setOrdenPrecio(e.target.value)} className="bg-[#A79A8A] text-[#FDF9E0] rounded-md p-2">
                    <option value="" className="text-sm font-body font-semibold">Ordenar por Precio</option>
                    <option value="asc" className="text-sm font-body font-semibold">Menor a Mayor</option>
                    <option value="desc" className="text-sm font-body font-semibold">Mayor a Menor</option>
                </select>
            </div>
            <div className="w-92 h-12 bg-[#FDF9E0] rounded-full p-2 my-auto">
                <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar..." className="border-none focus:outline-none"></input>
            </div>

            <div className="flex flex-col my-auto">
                <div className="flex gap-6 font-body text-[#FDF9E0]">
            <button onClick={() => setCategoriaActiva(categoriaActiva === 'Bebidas Frías' ? null : 'Bebidas Frías')} 
            className={`text-lg font-semibold cursor-pointer hover:scale-105 ${categoriaActiva === 'Bebidas Frías' ? 'text-[#3F3832] bg-[#A79A8A] rounded-2xl p-2' : 'text-[#FDF9E0]' }`}> Bebidas Frías </button>

            <button onClick={() => setCategoriaActiva(categoriaActiva === 'Cafés' ? null : 'Cafés')}
            className={`text-lg font-semibold cursor-pointer hover:scale-105 ${categoriaActiva === 'Cafés' ? 'text-[#3F3832] bg-[#A79A8A] rounded-2xl p-2' : 'text-[#FDF9E0]' }`}>Cafés</button>
            
                </div>
            </div>
        </div>

        </div>

        <div className="grid grid-cols-4 gap-2 p-6 mx-auto place-items-center">
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

    </>
    }
    export default Menu