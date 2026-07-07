import futbolito from "../assets/futbolito.webp";
import desayuno from "../assets/desayuno.webp";
import restaurante from "../assets/restaurant.webp";
import sala from "../assets/sala.webp";

export default function Gallery() {
  const images = [
    futbolito,
    restaurante,
    desayuno,
    sala,
  ];

  return (
    <section className="w-full bg-colonial-crema py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-colonial-madera mb-3">
            Nuestros Espacios
          </h2>
          <div className="w-16 h-1 bg-colonial-terracota mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 font-sans text-sm md:text-base">
            Un vistazo a la calidez y tradición que te esperan.
          </p>
        </div>

        {/* Grid adaptable: 1 col en móvil, 2 en tablet, 4 en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}