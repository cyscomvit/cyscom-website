import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar.jsx'
import Content from './Components/Content.jsx'
import { HelmetProvider } from 'react-helmet-async'
import OurMission from './Components/OurMission.jsx'
import OurJourney from './Components/OurJourney.jsx'

function App() {
  return (
    <>
      <HelmetProvider>
        <Navbar />
        <Content />
        <OurMission />
        <OurJourney />
        <LandingPage />
      </HelmetProvider>
    </>
  )
}

export default App
