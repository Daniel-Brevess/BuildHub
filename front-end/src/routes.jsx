import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from './pages/private/DashboardPage'
import ProfilePage from './pages/private/ProfilePage'
import SearchPage from './pages/private/SearchPage'
import AboutPage from './pages/public/AboutPage'
import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/public/LoginPage'
import Main from './pages/public/main'
import SignupPage from './pages/public/SignupPage'
import SubscriptionsPage from './pages/public/SubscriptionsPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'assinaturas',
        element: <SubscriptionsPage />,
      },
      {
        path: 'cadastro',
        element: <SignupPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/app/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/app/pesquisa',
    element: <SearchPage />,
  },
  {
    path: '/app/perfil',
    element: <ProfilePage />,
  },
])
