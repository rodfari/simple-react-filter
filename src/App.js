import './App.sass';
import { RouterProvider } from 'react-router-dom';
import { AppRoute } from './routes';

function App() {
  return <RouterProvider router={AppRoute} />
}

export default App;
