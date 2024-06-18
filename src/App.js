import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
