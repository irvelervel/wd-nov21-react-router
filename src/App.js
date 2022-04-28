import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Booking from './components/Booking'
import NotFound from './components/NotFound'
import PastaDetails from './components/PastaDetails'
import ClassComponent from './components/ClassComponent'

// BrowserRouter is just a virtual wrapper, with no visual elements, that is going
// to allow the router functionalities in every children

// Routes is a component in which you want to put all your Route
// it can contain just Route components inside

// Route is a component capable of mounting a piece of JSX on a specific path

function App() {
  return (
    <BrowserRouter>
      <div>
        <CustomNavbar
          title="Strivestaurant"
          payoff="Best Pasta on the Internet"
        />
        {/* passing different props you can dramatically change the content of a component */}
        {/* <CustomNavbar title="Strivify" payoff="The best music" /> */}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Booking />} path="/reservations" />
          <Route element={<Menu />} path="/menu" />
          <Route element={<PastaDetails />} path="/details/:pastaId" />
          <Route element={<ClassComponent />} path="/class" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
