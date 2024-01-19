import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import NavBar from './components/NavBar';
import FetchPosts from './components/FetchPosts';
import FetchComments from './components/FetchComments';
import FetchUsers from './components/FetchUsers';

function App() {
  return (
    
    
      <Router>
        <NavBar/>
        <div>
        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<FetchPosts/>} />
        <Route path="/comments" element={<FetchComments/>} />
        <Route path="/users" element={<FetchUsers/>} />
        </Routes>
        </div>
      </Router>

    


    
  );
}

export default App;