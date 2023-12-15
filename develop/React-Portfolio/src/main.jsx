// Importing necessary modules from react-dom and react-router-dom
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'

// Importing the main App component and individual page components
import App from './App.jsx'
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ResumePage from './pages/Resume.jsx';
import ErrorPage from './pages/Error.jsx';

// Creating a BrowserRouter and defining the routes for the application
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

// Use ReactDom.createRoot to render the application with the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
