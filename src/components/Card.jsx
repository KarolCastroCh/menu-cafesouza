function Card({ nombre, precio, id, imagen, modalDetalle }) {
    return (
        <div  className="w-70 h-80 bg-[#FDF9E0] rounded-lg py-4 pr-6 pl-4 shadow-[inset_-8px_-8px_1px_0px_#A79A8A]"> 
            <div className="flex flex-col gap-4">
                <img src={imagen} alt={nombre} className="h-48 w-full object-cover rounded-lg" />
                    
                        <h3 className="text-md font-semibold text-[#3F3832] font-display">{nombre}</h3>
                        <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm font-body text-[#3F3832]">${precio}</p>                        
                        
                        
                        <button onClick={modalDetalle}  className="bg-[#3F3832] max-w-1/1 max-h-1/1 rounded-full p-2 text-[#FDF9E0] font-body cursor-pointer hover:bg-[#A79A8A] hover:text-white">Ver</button>  
                    </div>         
            </div>
        </div>
    );
}

export default Card