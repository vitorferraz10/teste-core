import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Newsletter } from "./components/Newsletter"
import { Products } from "./components/Products"
import './global.css'
function App() {


  return (
    <div className="App">

      <Header />
      <Banner />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
