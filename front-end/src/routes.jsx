import { createBrowserRouter } from 'react-router-dom'
import ProfilePage from './pages/private/ProfilePage'
import AboutPage from './pages/public/AboutPage'
import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/public/LoginPage'
import SignupPage from './pages/public/SignupPage'
import SubscriptionsPage from './pages/public/SubscriptionsPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/assinaturas',
    element: <SubscriptionsPage />,
  },
  {
    path: '/cadastro',
    element: <SignupPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/app/perfil',
    element: <ProfilePage />,
  },
])
