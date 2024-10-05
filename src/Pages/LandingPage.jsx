import { Helmet } from 'react-helmet-async'
import Footer from '../Components/Footer'
import PictureGallery from '../Components/PictureGallery'

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>CYSCOM</title>
      </Helmet>

      {/* Your code goes here */}
      <PictureGallery />
      <Footer />
      {/* <Sample /> */}
    </div>
  )
}

export default LandingPage
