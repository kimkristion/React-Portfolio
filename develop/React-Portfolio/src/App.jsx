// Importing the Outlet module from react-router-dom
import { Outlet } from 'react-router-dom';

// Import the Header and Footer components to be displayed throughout the application
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

// Defining the main App component
function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;