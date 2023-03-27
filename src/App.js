
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Views/Footer';
import Header from './Views/Header';
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Main from './Admin/Main';
function App() {
  return (
    // <div style={{padding:0,margin:0,boxSizing:"border-box"}}>
    //   <Header />
    //   <Footer></Footer>
    //   <Routes>
    //         <Route path='/Login' element={<Login/>}></Route>
    //         <Route path='/Signup' element={<SignUp/>}></Route>

    //         </Routes>
    // </div>
    <Main></Main>
  );
}

export default App;
