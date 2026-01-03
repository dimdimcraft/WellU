import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { SignUpPage } from './components/SignUpPage';
import { LoginPage } from './components/LoginPage';
import { ChatDashboard } from './components/ChatDashboard';
import { ChatHistory } from './components/ChatHistory';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatDashboard />} />
        <Route path="/history" element={<ChatHistory />} />
      </Routes>
    </Router>
  );
}
