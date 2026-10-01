import { useState, useEffect } from 'react'

function Modal({ nombre, precio, id, imagen, onClose, descripcion }) {
    const [detalle, setDetalle] = useState(null)

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setDetalle(datos.drinks[0])
            })
    }, [id])

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
        <div className="bg-[#FDF9E0] w-1/2 z-50 p-4 rounded-lg shadow-lg">       
        
            {detalle ? (
                <div className="grid grid-cols-2 gap-8">
                    <img src={detalle.strDrinkThumb} alt={detalle.strDrink} className="h-full w-full object-cover rounded-lg" />   
                    <div className="flex flex-col gap-4"> 
                        <h3 className="text-md font-semibold text-[#3F3832] font-display">{detalle.strDrink}</h3>
                        <p className="text-sm font-body text-[#3F3832]">${precio}</p> 
                        <p className="text-sm font-body text-[#3F3832]">{detalle.strInstructions}</p>                     
                        <button onClick={onClose}  className="bg-[#3F3832] max-w-1/3 rounded-full mt-auto text-[#FDF9E0] p-2 font-body cursor-pointer hover:bg-[#A79A8A] hover:text-white">Cerrar</button>  
                    </div>         
                </div>
            ) : (
                <p>Cargando...</p>
            )}
            
        </div>
        </div>
    )
}

export default Modal