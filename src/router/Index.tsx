import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import Fast from '@/views/Fast/Fast'
import Mine from '@/views/Mine/Mine'
import Reg from '@/views/Reg/Reg'
import App from '@/App'

const router = (
    <Router>
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/fast' element={<Fast></Fast>}></Route>
                <Route path='/mine' element={<Mine></Mine>}></Route>

            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/reg' element={<Reg></Reg>}></Route>

        </Routes>
    </Router>
)

export default router