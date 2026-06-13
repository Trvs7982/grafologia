import './App.css'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import MethodologySection from './components/MethodologySection'
import SectorsSection from './components/SectorsSection'
import CommitmentSection from './components/CommitmentSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="app-shell">
      <HeroSection />
      <main className="content">
        <ServicesSection />
        <div className="two-columns">
          <MethodologySection />
          <SectorsSection />
        </div>
        <CommitmentSection />
      </main>
      <ContactSection />
    </div>
  )
}

export default App
