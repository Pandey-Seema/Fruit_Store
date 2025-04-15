
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'
import Banner from './components/Banners/Banner'
import Banner2 from './components/Banners/Banner2'
import Banner3 from './components/Banners/Banner3'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='overflow-x-hidden m-10'>
        
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />

      </div>
    </>
  )
}

export default App

