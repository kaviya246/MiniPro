import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from './Components/Fromu';
import RegisterForm from './Components/Forma';
import Front from './Components/Front';
// import { Login } from '@mui/icons-material';
import LoginPage from './Components/Login';
import Home from './Components/Home';
function App() {
    return (
        <>
               <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Front/>} />
                    <Route exact path='/advisor' element={<RegisterForm/>}/>
                    <Route exact path='/user' element={<RegistrationForm/>}/>
                    <Route exact path='/Register' element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>  
        </>
    );
}
export default App;
