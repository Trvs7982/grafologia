import SectionHeader from './SectionHeader'

const commitments = [
  {
    title: 'Confidencialidad absoluta',
    description: 'Resguardo total de la información sensible del caso.',
  },
  {
    title: 'Objetividad técnica',
    description: 'Análisis imparcial basado en evidencia científica.',
  },
  {
    title: 'Respaldos judiciales',
    description: 'Firma digital del dictamen con la solidez probatoria requerida.',
  },
]

export default function CommitmentSection() {
  return (
    <section className="section section-commitment">
      <SectionHeader title="Compromiso profesional" subtitle="Principios de práctica" />
      <div className="commitment-grid">
        {commitments.map((item) => (
          <div key={item.title} className="commitment-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
