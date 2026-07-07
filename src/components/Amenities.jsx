export default function Amenities() {
  // 1. Definimos los datos de los servicios en un arreglo de objetos
  const services = [
    {
      id: 1,
      icon: "🏨", // Usamos un emoji temporal, luego se puede cambiar por un componente de ícono
      title: "Habitaciones Coloniales",
      description: "Espacios amplios diseñados para un descanso lleno de historia, tradición y confort."
    },
    {
      id: 2,
      icon: "🍽️",
      title: "Gastronomía Local",
      description: "Sabores tradicionales preparados con ingredientes frescos de nuestra región."
    },
    {
      id: 3,
      icon: "📍",
      title: "Ubicación Privilegiada",
      description: "En el corazón del municipio, a unos pasos de los principales puntos de interés."
    },
    {
      id: 4,
      icon: "🌿",
      title: "Patios y Jardines",
      description: "Hermosas áreas comunes al aire libre rodeadas de arcos coloniales y vegetación."
    }
  ];

  return (
    // Una sección con fondo blanco puro para que resalte y rompa con el fondo crema del Hero
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-colonial-madera mb-3">
            Una Experiencia Única
          </h2>
          <div className="w-16 h-1 bg-colonial-terracota mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans text-sm md:text-base">
            Disfruta de la perfecta combinación entre la arquitectura colonial tradicional y las comodidades del mundo moderno.
          </p>
        </div>

        {/* Cuadrícula de Servicios: 1 columna en móvil, 2 en tablets y 4 en pantallas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="flex flex-col items-center text-center p-6 bg-colonial-crema rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100 group"
            >
              {/* Contenedor del ícono/emoji con un sutil fondo terracota */}
              <div className="w-16 h-16 bg-colonial-terracota/10 text-colonial-terracota rounded-full flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              
              <h3 className="font-serif font-bold text-xl text-colonial-madera mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm font-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}