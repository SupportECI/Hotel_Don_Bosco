import { useState } from 'react';
import RoomModal from './RoomModal';

import room from '../assets/room.webp';
import room2 from '../assets/room2.webp';

export default function RoomList() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      image: room,
      capacity: "👥 1 Personas",
      description: "Nuestra habitación más amplia, con vista al patio central y detalles en madera tallada a mano.",
      price: "$275 MXN"
    },
    {
      id: 2,
      image: room2,
      capacity: "👥 2 Personas",
      description: "Ideal para parejas o viajes de negocios. Espacio acogedor con todas las comodidades modernas.",
      price: "$440 MXN"
    },
    {
      id: 3,
      image: room,
      capacity: "👥 3 Personas",
      description: "Perfecta para amigos o colegas de trabajo. Cuenta con escritorio y excelente iluminación natural.",
      price: "$600 MXN"
    }
  ];

  const habitaciones = [
    {
        id: 4,
        image: room,
        capacity: "👥 4 Personas",
        description: "Espacio ideal para familias. Amplia y cómoda para un descanso grupal.",
        price: "$710 MXN"
    },
    {
      id: 5,
      image: room2,
      capacity: "👥 5 Personas",
      description: "La máxima experiencia de lujo y espacio para grupos grandes o familias numerosas.",
      price: "$820 MXN"
    }
  ];

  return (
    <section className="w-full bg-colonial-crema py-16 px-6" id="habitaciones">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-colonial-madera mb-3">
            Nuestras Habitaciones
          </h2>
          <div className="w-16 h-1 bg-colonial-terracota mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Encuentra el espacio perfecto para tu descanso.
          </p>
        </div>

        {/* PRIMERA CUADRÍCULA (3 Habitaciones) - 4 columnas en tablet, 6 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Agregamos 'index' al map para poder ubicar la tercera tarjeta */}
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              // md:col-span-2: Toma 2 columnas en tablet
              // lg:col-span-2: Toma 2 columnas en escritorio
              // Lógica extra: Si es el 3er elemento (index 2), empieza en la col 2 en tablet para centrarse, y se resetea en escritorio.
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-2 ${index === 2 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
            >
              <div 
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${room.image})` }}
              ></div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-colonial-terracota font-semibold mb-3">
                  {room.capacity}
                </p>
                <p className="text-gray-600 font-sans text-sm mb-6 flex-grow">
                  {room.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-colonial-madera text-lg">
                    {room.price} <span className="text-xs font-normal text-gray-500">/ noche</span>
                  </span>
                  <button 
                    onClick={() => setSelectedRoom(room)}
                    className="bg-colonial-terracota hover:brightness-110 text-white px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEGUNDA CUADRÍCULA (2 Habitaciones) - 4 columnas en tablet, 6 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10">
          {habitaciones.map((hab, index) => (
            <div 
              key={hab.id} 
              // Aquí solo aplicamos el centrado (col-start-2) a la primera tarjeta, pero ÚNICAMENTE en pantallas grandes (lg).
              // En tablet (md) fluirán naturalmente de 2 en 2.
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-2 ${index === 0 ? 'lg:col-start-2' : ''}`}
            >
              <div 
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${hab.image})` }}
              ></div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-colonial-terracota font-semibold mb-3">
                  {hab.capacity}
                </p>
                <p className="text-gray-600 font-sans text-sm mb-6 flex-grow">
                  {hab.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-colonial-madera text-lg">
                    {hab.price} <span className="text-xs font-normal text-gray-500">/ noche</span>
                  </span>
                  <button 
                    onClick={() => setSelectedRoom(hab)}
                    className="bg-colonial-terracota hover:brightness-110 text-white px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <RoomModal 
          room={selectedRoom} 
          onClose={() => setSelectedRoom(null)}
        />

      </div>
    </section>
  );
}