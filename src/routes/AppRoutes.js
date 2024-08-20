import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import NotFound from '../pages/notFound/NotFound';
const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="*" element={<NotFound />} />
  
        </Routes>
      </Router>
    );
  }
  
  export default AppRouter;