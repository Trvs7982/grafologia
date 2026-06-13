import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Dictámenes periciales de autenticidad de firmas',
    description:
      'Análisis comparativo de firmas para procesos judiciales, notariales y civiles.',
  },
  {
    title: 'Identificación de autoría de manuscritos',
    description: 'Determinación de si un texto fue escrito por una persona específica.',
  },
  {
    title: 'Detección de falsificaciones y alteraciones',
    description:
      'Identificación de borrados, sobreescrituras, montajes y simulaciones de escritura.',
  },
  {
    title: 'Análisis de documentos',
    description: 'Cartas, notas, cheques, testamentos y contratos.',
  },
  {
    title: 'Ratificación en estrados',
    description: 'Sustentación oral y escrita del dictamen ante jueces y tribunales.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section section-services">
      <SectionHeader title="¿Qué ofrezco?" subtitle="Servicios" />
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
