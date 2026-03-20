import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';

import TwoFactor from './pages/TwoFactor';
import Pricing from './pages/Pricing';
import Configuration from './pages/Configuration';
import Monitor from './pages/Monitor';
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/two-factor" element={<TwoFactor />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/config" element={<Configuration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
