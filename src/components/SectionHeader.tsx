type SectionHeaderProps = {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-title-row">
      <div className="section-label">{subtitle ?? 'Sección'}</div>
      <h2>{title}</h2>
    </div>
  )
}
