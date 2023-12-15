import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ResumePage from './pages/Resume.jsx';
import ErrorPage from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      { path: '/Home', element: <HomePage />},
      { path: '/About', element: <AboutPage />},
      { path: '/Contact', element: <ContactPage />},
      { path: '/Portfolio', element: <PortfolioPage />},
      { path: '/Resume', element: <ResumePage />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
