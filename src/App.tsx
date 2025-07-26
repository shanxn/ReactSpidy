
import './App.css'
import NavBar from './components/navBar'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Blogs from './components/blog'
import bgImage from './assets/spider-man-far-from-home-5k-5100x6691-947.jpg'
function App() {
  
  return (
    <>
    
      <div style={{ backgroundImage: `url(${bgImage})` }} className='w-screen h-fit flex flex-col bg-cover bg-center'>
      <NavBar />
      <Home />
      </div>
      <About />
      <Services />
      <Blogs />
    </>
    
    
  )
}

export default App

