import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AlterationsPage from './pages/AlterationsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CustomSuitsPage from './pages/CustomSuitsPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<ServicesPage />} path="services" />
          <Route element={<CustomSuitsPage />} path="custom-suits" />
          <Route element={<AlterationsPage />} path="alterations" />
          <Route element={<GalleryPage />} path="gallery" />
          <Route element={<AboutPage />} path="about" />
          <Route element={<NewsPage />} path="news" />
          <Route element={<ContactPage />} path="contact" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
