export default function Navbar() {
    return(
        <nav className="bg-colonial-crema w-full p-4">
            <div className="max-w-7xl mx-auto bg-colonial-madera text-colonial-crema rounded-lg flex justify-between items-center px-6 py-3 shadow-lg">

                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-colonial-crema rounded-full shrink-0">
                        <span className="p-10 font-serif font-bold text-xl tracking-wide whitespace-nowrap">
                            Hotel Don Bosco
                        </span>
                    </div>
                </div>

                <div>
                    <button className="bg-colonial-terracota hover:brightness-110 text-colonial-crema px-6 py-2 rounded-md font-sans font-semibold transition-all">
                        Reservar
                    </button>
                </div>

            </div>
        </nav>
    );
}