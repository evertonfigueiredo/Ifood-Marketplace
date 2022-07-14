import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './styles/global.css';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Restaurante from './pages/restaurante';
import Sidebar from './components/sidebar';
import Home from './pages/home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cadastro' element={<Cadastro/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/restaurante/:id' element={<Restaurante/>}></Route>
            </Routes>
            <Sidebar/>
        </BrowserRouter>
    )
}

export default Router