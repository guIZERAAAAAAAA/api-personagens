import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>

<Routes>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
</Routes>

    </>
    
  )
}

export default App