import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';
import FormPage from './pages/FormPage';
import SigIn from './pages/SigIn';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<ProductsPage />}></Route>
        <Route path='/products/:slug' element={<ProductDetailPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/form' element={<FormPage />}></Route>
        <Route path='/register' element={<SigIn />}></Route>
        <Route path='/posts' element={<PostsPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
