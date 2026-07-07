export default function Ubication() {
  return (
    <section className="w-full bg-white py-16 px-6" id="contacto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda: Datos de contacto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-colonial-madera mb-3">
            Ubicación y Contacto
          </h2>
          <div className="w-16 h-1 bg-colonial-terracota mb-6 rounded-full"></div>
          <p className="text-gray-600 mb-8 font-sans leading-relaxed">
            Estamos listos para recibirte. Encuéntranos en el centro histórico o contáctanos directamente para resolver cualquier duda sobre tu estancia o reservación.
          </p>
          
          <div className="space-y-5 font-sans">
            <div className="flex items-start gap-4">
              <span className="text-2xl text-colonial-terracota">📍</span>
              <div>
                <h4 className="font-bold text-colonial-madera">Dirección</h4>
                <p className="text-gray-600 text-sm">Av. Don Bosco #200 Barrio de María Auxiliadora, San Cristóbal de las Casas, Chiapas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-2xl text-colonial-terracota">📞</span>
              <div>
                <h4 className="font-bold text-colonial-madera">Teléfono / WhatsApp</h4>
                <p className="text-gray-600 text-sm">+52 967 150 5457</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-2xl text-colonial-terracota">✉️</span>
              <div>
                <h4 className="font-bold text-colonial-madera">Correo Electrónico</h4>
                <p className="text-gray-600 text-sm">Hotel.Don.Bosco@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-96 bg-colonial-crema rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3862884749524!2d-92.63314032538722!3d16.70756682203438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed455871b08ec7%3A0xea0c6cf31accf69d!2sHotel%20Don%20Bosco!5e0!3m2!1ses!2smx!4v1780941895850!5m2!1ses!2smx" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}