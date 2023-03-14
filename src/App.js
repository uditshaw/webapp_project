
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Views/Footer';
import Header from './Views/Header';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Routes>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Signup' element={<SignUp/>}></Route>

            </Routes>
    </div>
  );
}

export default App;
