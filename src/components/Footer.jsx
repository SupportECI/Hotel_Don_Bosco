export default function Footer() {
  return (
    <footer className="w-full bg-colonial-madera text-colonial-crema py-12 px-6">
      
      {/* Parte superior del Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-colonial-crema/10 pb-8 mb-8">
        <div className="text-center md:text-left">
          <span className="font-serif font-bold text-2xl tracking-wide block mb-2">
            Hotel Don Bosco
          </span>
          <p className="text-sm text-colonial-crema/70 font-sans">
            Tradición, confort y descanso en el corazón de Chiapas.
          </p>
        </div>
        
        {/* Enlaces de navegación rápidos */}
        <div className="flex gap-6 font-sans text-sm">
          <a href="#inicio" className="hover:text-colonial-terracota transition-colors">Inicio</a>
          <a href="#habitaciones" className="hover:text-colonial-terracota transition-colors">Habitaciones</a>
          <a href="#contacto" className="hover:text-colonial-terracota transition-colors">Contacto</a>
        </div>
      </div>

      {/* Parte inferior del Footer (Derechos de Autor) */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-colonial-crema/50 font-sans">
        <p>© 2026 Hotel Don Bosco. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Aviso de Privacidad</a>
          <a href="#" className="hover:underline">Términos y Condiciones</a>
        </div>
      </div>

    </footer>
  );
}