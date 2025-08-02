
import './App.css'
import Footer from './components/Footer'
import Header from './components/Navbar'
import QuantityPicker from './components/QuantityPicker'
import Catalog from './pages/Catalog'



function App() {


  return (
    <>
      <Header></Header>
      <QuantityPicker/>
      <Catalog />
      <Footer />
    </>
  )
}

export default App
