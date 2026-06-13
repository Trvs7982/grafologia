import SectionHeader from './SectionHeader'

const methods = [
  'Estudio de gestos gráficos y elementos individuales de escritura',
  'Análisis de presión, velocidad, forma, proporción y espacio',
  'Evidencia fotográfica ampliada y documentación gráfica',
  'Cotejo comparativo con patrones de referencia',
  'Conclusiones motivadas con estándares probatorios legales',
]

export default function MethodologySection() {
  return (
    <section className="section section-methodology">
      <SectionHeader title="Metodología" subtitle="Proceso pericial" />
      <p className="methodology-intro">
        El método grafoscópico forense constituye la base técnica del análisis, aplicando criterios científicos validados en criminalística documental.
      </p>
      <ul className="methodology-list">
        {methods.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
    </section>
  )
}
