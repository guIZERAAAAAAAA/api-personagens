import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {


  return (
    <>

<Routes>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />/ 
          seguinte, tem mt erro, nao vou validar tudo agora, tenta corrigir o magimo possivel ate a proxima aula, depois tu me explica ( blz)
        */}
      </Routes>
      {/* <Footer /> */}
</Routes>

    </>
    
  )
}

export default App