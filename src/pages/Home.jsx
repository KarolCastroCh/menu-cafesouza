import Nav from '../components/Nav'

function Home() {
  return (
    <>

<div className="relative overflow-hidden ">

    <Nav />

    <div className="bg-[#3F3832] grid grid-cols-2 mx-auto h-180">    
        <div className="p-6 flex flex-col items-center gap-10 mt-50">
            <h1 className="text-8xl text-[#FDF9E0] text-center font-montecarlo">Café Souza</h1>
            <p className="text-[#FDF9E0] text-2xl p-6 font-display">Disfruta la vida en cada sorbo.</p>
            <a className="justify-center bg-[#FDF9E0] text-[#3F3832] cursor-pointer hover:bg-white hover:text-[#A79A8A] hover:border-[#A79A8A] hover:border-2 rounded-full p-4 font-body font-semibold w-1.5/6">MENÚ</a>
        </div>
       <div className="relative">
    <img src="./src/img/coffe-texture.png" alt="café souza" className="w-full h-full object-cover"/>
    <img src="./src/img/LOGO cafesouza blanco.png" alt="café souza" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"/>
        </div>       
    </div>

</div>

        <div className="flex flex-col p-4 bg-[#C7D4DD] w-full items-center gap-6">
          <h2 className="text-xl font-bold text-[#]">TUS FAVORITOS</h2>
            <div className="flex gap-6"> 
                <div className="w-92 h-92 bg-white rounded-2xl p-6">
                <h3>Moka</h3>
                <p>$5.00</p>
                </div>
            <div className="w-92 h-92 bg-white rounded-2xl p-6">
                <h3>Cappuccino</h3>
                <p>$4.50</p>
            </div>
            <div className="w-92 h-92 bg-white rounded-2xl p-6">
                <h3>Latte</h3>
                <p>$4.00</p>
            </div>
            </div>
        </div>

        <div className="flex flex-col items-center p-6 gap-6 bg-[#3F3832] text-white">
            <h2 className="text-xl font-bold">CATFEE</h2>
            <div className="flex justify-between w-full">
            <p>© 2024 Catfee. Todos los derechos reservados.</p>
            <div>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            </div>
        </div>
    
    </>
)
}

export default Home