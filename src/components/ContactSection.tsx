import SectionHeader from './SectionHeader'

export default function ContactSection() {
  return (
    <footer className="contact-section">
      <div className="contact-panel">
        <SectionHeader title="Comunicación directa" subtitle="Contacto" />
        <ul className="contact-list">
          <li>
            <span className="contact-item-label">Teléfono / WhatsApp</span>
            <a href="https://wa.me/573007520807" target="_blank" rel="noreferrer noopener">
              +57 300 762 0807
            </a>
          </li>
          <li>
            <span className="contact-item-label">Correo electrónico</span>
            <a href="mailto:coni6750@yahoo.com.mx" target="_blank" rel="noreferrer noopener">
              coni6750@yahoo.com.mx
            </a>
          </li>
          <li>
            <span className="contact-item-label">Ubicación</span>
            <span>Pereira, Risaralda</span>
          </li>
          <li>
            <span className="contact-item-label">Cobertura</span>
            <span>Eje Cafetero y todo el territorio nacional</span>
          </li>
        </ul>
      </div>
      <div className="contact-note">
        <p>
          La escritura no miente. Si requiere certeza documental para un proceso judicial o pericial, cuento con el respaldo técnico y la experiencia para demostrarlo.
        </p>
      </div>
    </footer>
  )
}
