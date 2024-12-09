import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Navbar from './components/common/Navbar';

function Layout() {
  return(
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          
          <Route path='/' element={<Layout/>}>
              <Route path='/home' element={<Home/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
