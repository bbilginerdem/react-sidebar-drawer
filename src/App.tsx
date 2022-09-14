import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import { NoMatch } from './pages';
import { RoutePath, routes } from './routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(route =>
            <Route
              index={RoutePath.HOME === route.path}
              path={route.path}
              element={<route.component />}
              key={route.name}
            />
          )}
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
