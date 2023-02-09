import Home from './components/routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/routes/navigation-bar/navigation-bar.component';
import { SignIn } from './components/routes/sign-in/sign-in.component';
import { Shop } from './components/routes/shop/shop.component';


const App = () =>{
  return(
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element ={<Home/>}/>
        <Route path='shop' element ={<Shop/>}/>
        <Route path='signIn' element = {<SignIn/>}/>
      </Route>
    </Routes>
    );
}

export default App;
