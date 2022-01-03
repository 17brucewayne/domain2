import './App.css';
import Homepage from './Homepage/Homepageindex';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Login from "./Loginpage.js";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />}>
        
      </Route>
      <Route exact path="/homepage" element={<Homepage/>}>
  
      </Route>
    </Routes>
    </BrowserRouter>
     
     
     
    </>
  );
}

export default App;
