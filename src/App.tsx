import './App.css'

function App() {
  return (
    <div className="landing-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Presentación de Servicios</p>
          <h1>Peritaje Grafológico Forense</h1>
          <p className="role">Consuelo Betancur - Perito Grafólogo Forense</p>
          <p className="lead">
            Soy perito grafólogo forense con años de experiencia en el análisis técnico y científico de la escritura manuscrita, firmas y documentos.
          </p>
          <p className="slogan">
            La escritura es la huella de la mente. Yo leo esa huella.
          </p>
          <p className="description">
            Mi trabajo se fundamenta en metodologías avaladas por la criminalística y la grafología científica para determinar autenticidad, autoría y posibles alteraciones documentales.
          </p>
        </div>
        <div className="hero-panel">
          <h2>Dictámenes periciales con respaldo técnico</h2>
          <p>
            Confidencialidad absoluta, objetividad e imparcialidad técnica. Cada informe se entrega con firma digital y cumple los estándares probatorios exigidos por la ley.
          </p>
        </div>
      </header>

      <main>
        <section className="section section-services">
          <h2>¿Qué ofrezco?</h2>
          <div className="grid-cards">
            <article className="card">
              <h3>Dictámenes de autenticidad de firmas</h3>
              <p>Análisis comparativo de firmas para procesos judiciales, notariales y civiles.</p>
            </article>
            <article className="card">
              <h3>Identificación de autoría de manuscritos</h3>
              <p>Determinación de si un texto fue escrito por una persona específica.</p>
            </article>
            <article className="card">
              <h3>Detección de falsificaciones y alteraciones</h3>
              <p>Identificación de borrados, sobreescrituras, montajes y simulaciones de escritura.</p>
            </article>
            <article className="card">
              <h3>Análisis de documentos</h3>
              <p>Cartas, notas, cheques, testamentos y contratos.</p>
            </article>
            <article className="card">
              <h3>Ratificación en estrados</h3>
              <p>Sustentación oral y escrita del dictamen ante jueces y tribunales.</p>
            </article>
          </div>
        </section>

        <section className="section section-methodology">
          <h2>Metodología</h2>
          <p>
            Utilizo el método grafoscópico forense basado en el estudio de gestos gráficos, presión, velocidad, forma, proporción y espacio. Cada informe incluye evidencia fotográfica ampliada, cotejo y conclusiones motivadas.
          </p>
        </section>

        <section className="section section-sectors">
          <h2>Sectores que atiendo</h2>
          <ul>
            <li>Despachos de abogados y litigios civiles, penales, laborales y de familia</li>
            <li>Notarías y entidades financieras</li>
            <li>Empresas en casos de fraude documental</li>
            <li>Particulares en disputas sucesorales o contractuales</li>
          </ul>
        </section>

        <section className="section section-commitment">
          <h2>Compromiso</h2>
          <p>Confidencialidad absoluta, objetividad e imparcialidad técnica. Todos los dictámenes se entregan con firma digital.</p>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-copy">
          <p>La escritura no miente. Si necesitas certeza documental, cuento con el respaldo técnico para demostrarlo.</p>
        </div>
        <div className="contact-panel">
          <h3>Contacto</h3>
          <p><strong>Tel:</strong> 300 752 0807</p>
          <p><strong>Email:</strong> coni6750arroayahoo.com.mx</p>
          <p><strong>Ubicación:</strong> Pereira, Risaralda</p>
          <p><strong>Atención:</strong> Eje Cafetero y a nivel nacional</p>
        </div>
      </footer>
    </div>
  )
}

export default App
