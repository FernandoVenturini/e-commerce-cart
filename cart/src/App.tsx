// import { createBrowserRouter } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'; 
// import { Home } from './pages/home';
import { Home } from './pages/home';
// import { Cart } from './pages/cart'; 
import { Cart } from './pages/cart';
// import { Layout } from './components/layout';
import { Layout } from './components/layout';

// createBrowserRouter is used to create a router instance
const router = createBrowserRouter([
  {
    element: <Layout />,// Layout component wraps around the pages
    children: [ // children are the routes that will be rendered inside the Layout
      // Define the routes for the application
      {
        path: "/", // The root path will render the Home component
        index: true, // This indicates that this is the default route
        element: <Home/> // Home component will be rendered at the root path
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

export {router};