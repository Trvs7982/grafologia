import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Dictámenes de autenticidad de firmas',
    description:
      'Análisis comparativo técnico de firmas cuestionadas para procesos judiciales, notariales y civiles.',
  },
  {
    title: 'Identificación de autoría de manuscritos',
    description: 'Determinación científica de si un texto manuscrito fue escrito por una persona específica.',
  },
  {
    title: 'Detección de falsificaciones y alteraciones',
    description:
      'Identificación de borrados, sobreescrituras, montajes, simulaciones y otras adulteraciones documentales.',
  },
  {
    title: 'Análisis forense de documentos',
    description: 'Estudio técnico de cartas, notas, cheques, testamentos, contratos y otros documentos.',
  },
  {
    title: 'Ratificación en estrados judiciales',
    description: 'Sustentación oral y escrita del dictamen pericial ante jueces, magistrados y tribunales.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section section-services">
      <SectionHeader title="Servicios periciales" subtitle="Grafología forense" />
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}
