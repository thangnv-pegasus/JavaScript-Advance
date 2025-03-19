import { Route, Routes } from 'react-router';
import { publicRouters } from './routes';
import { routes } from './config/routes';

function App() {
  return (
    <Routes>
      {publicRouters.map((router, index) => (
        <Route
          path={router.path}
          element={<router.component />}
          key={index}
          index={router.path === routes.lesson1}
        />
      ))}
    </Routes>
  );
}

export default App;
