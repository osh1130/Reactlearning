import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from '../App10'
import Home from '../pages/Home'
import List from '../pages/List'
import Detail from '../pages/Detail'
import Error from '../pages/Error'

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/list/:id' element={<List />}></Route>
                <Route path='/detail' element={<Detail />}></Route>
            </Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter
