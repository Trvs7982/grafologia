import SectionHeader from './SectionHeader'

const sectors = [
  'Despachos de abogados y litigios civiles, penales, laborales y de familia',
  'Notarías y entidades financieras',
  'Empresas en casos de fraude documental',
  'Particulares en disputas sucesorales o contractuales',
]

export default function SectorsSection() {
  return (
    <section className="section section-sectors">
      <SectionHeader title="Sectores que atiendo" subtitle="Ámbitos" />
      <ul>
        {sectors.map((sector) => (
          <li key={sector}>{sector}</li>
        ))}
      </ul>
    </section>
  )
}
