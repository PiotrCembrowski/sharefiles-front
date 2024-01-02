import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/Register', element: <Register/>},
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App
