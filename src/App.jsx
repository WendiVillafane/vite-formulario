import { Outlet } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import RegFormProvider from './providers/RegFormProvider'
import Validacion from './components/Validacion';

function App() {

  return (
    <RegFormProvider>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-7">
            <Outlet />
            <Validacion />
          </div>
          <div className="col-12 col-md-5">
            <Card />
          </div>
        </div>
      </div>
    </RegFormProvider>
    
  )
}

export default App