import './App.css';
import Home from "./home";
import Register from "./register"
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
     </Routes>
   </Router>
  );
}

export default App;
