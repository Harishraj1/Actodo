import Login from "./Login"
import Signup from "./Signup"
import LandingPage from "./LandingPage"
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import { useState } from "react"

function Authentication(){

    const [user,setuser] = useState([
        {
            username: "harish",
            password: "123"
        }
    ])

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
                <Route path='/signup' element={<Signup user={user} setuser={setuser}/>}></Route>
                <Route path='/landing' element={<LandingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Authentication