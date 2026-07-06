import { createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/public/AboutPage'
import LandingPage from './pages/public/LandingPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
])
