import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddrentVideo from './pages/AddrentVideo.jsx';
import RentedVideo from './pages/RentedVideo';
function App() {
  return (
    <>
  <Router className='app'>
    <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/api/addRentVideo" element={<AddrentVideo/>}/>
        <Route exact path="/api/rentVideo" element={<RentedVideo/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
