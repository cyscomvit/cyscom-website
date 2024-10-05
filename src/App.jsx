import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar.jsx'
import Content from './Components/Content.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Journey from './Components/Journey.jsx'
import OurMission from './Components/OurMission.jsx'

function App() {
  return (
    <>
      <HelmetProvider>
        <Navbar />
        <Content />
        <Journey />
        <OurMission />
        <LandingPage />
      </HelmetProvider>
    </>
  )
}

export default App
