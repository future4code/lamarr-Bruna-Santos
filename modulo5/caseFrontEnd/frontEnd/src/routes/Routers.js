import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EndPage from '../pages/EndPage'
import Home from '../pages/home'


export const Routers = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/end-order' element={<EndPage /> } />
            </Routes>
        </BrowserRouter>
    )
}