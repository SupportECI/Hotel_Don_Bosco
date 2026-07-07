export default function CallToAction() {
    return (
        <div className="bg-white py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-colonial-crema shadow-colonial-terracota/20 rounded-3xl p-8 shadow-lg sm:p-16 lg:p-24">
                    <div className="flex justify-between gap-8 max-md:flex-col max-sm:items-center max-sm:text-center md:items-center">
                        
                        {/* Texto del Call to Action */}
                        <div className="max-w-xs lg:max-w-lg">
                            <h2 className="text-colonial-terracota mb-4 text-3xl font-bold">
                                ¿Listo para vivir la experiencia?
                            </h2>
                            <p className="text-colonial-terracota/80 text-lg">
                                Relájate y disfruta de nuestras instalaciones. Asegura tu descanso hoy mismo y reserva tu habitación al mejor precio.
                            </p>
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex flex-wrap items-center gap-4 max-md:w-full max-md:flex-col md:justify-end">
                            <a 
                                href="#reservar" 
                                className="bg-colonial-terracota text-white flex w-fit items-center gap-3 rounded-xl px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Reservar Ahora
                            </a>
                            <a 
                                href="#contacto" 
                                className="border-2 border-colonial-terracota text-colonial-terracota flex w-fit items-center gap-3 rounded-xl px-8 py-4 font-semibold hover:bg-colonial-terracota hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Contáctanos
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}