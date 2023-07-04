import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Contact from './components/Contact'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/"element={<Home />}  />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route element={<NotFound />} />
    </Routes>
      
   
  </Router>
)

export default App
