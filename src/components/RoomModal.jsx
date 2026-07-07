export default function RoomModal({ room, onClose }) {

    if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-colonial-madera w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-colors cursor-pointer"
        >
          ✕
        </button>
        <div 
          className="h-64 sm:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${room.image})` }}
        ></div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-colonial-terracota font-semibold">{room.capacity}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-colonial-madera">{room.price}</p>
              <p className="text-xs text-gray-500">por noche</p>
            </div>
          </div>

          <p className="text-gray-600 font-sans leading-relaxed mb-6">
            {room.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-colonial-terracota">✓</span> Wi-Fi de alta velocidad
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-colonial-terracota">✓</span> Desayuno incluido
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-colonial-terracota">✓</span> Agua caliente 24 hrs
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-colonial-terracota">✓</span> Estacionamiento gratuito
            </div>
          </div>

          <button className="w-full bg-colonial-terracota hover:brightness-110 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-colonial-terracota/20">
            Reservar esta habitación ahora
          </button>
        </div>

      </div>
    </div>
  );
}