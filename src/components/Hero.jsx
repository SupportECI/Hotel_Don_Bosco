import hero from '../assets/hero.webp';

export default function Hero() {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center" id="inicio">
            <div className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${hero})` }}
            ></div>

            <div className='absolute inset-0 bg-colonial-madera/60 z-10'></div>

            <div className='relative z-20 flex flex-col items-center text-center px-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-colonial-crema mb-8 drop-shadow-md'>
                    BIENVENIDO A HOTEL DON BOSCO
                </h1>

                <a
                    href="#reservar"
                    className="bg-colonial-terracota text-white flex w-fit items-center gap-3 rounded-xl px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reservar Ahora
                </a>
            </div>
        </section>
    )
}