import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Siginup(props) {

    const navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser

    const [username,setusername] = useState("")
    const [userpass,setuserpass] = useState("")
    const [userpass2,setuserpass2] = useState("")

    function handleinputname(event){
        setusername(event.target.value)
    }
    function handleinputpass(event){
        setuserpass(event.target.value)
    }
    function handleinputpass2(event){
        setuserpass2(event.target.value)
    }
    function add_user(){
        setuser([...user,{username:username,password:userpass}])
        navigate("/")
        setusername("")
        setuserpass("")
        setuserpass2("")

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hii!</h1>
                <p>Signup here :)</p>
                <div className="flex flex-col gap-2 py-5">
                    <input className="w-52 border border-black rounded-md p-1" placeholder="Username" onChange={handleinputname} value={username}></input>
                    <input className="w-52 border border-black rounded-md p-1" placeholder="Password" onChange={handleinputpass} value={userpass}></input>
                    <input className="w-52 border border-black rounded-md p-1" placeholder="Confirm Password" onChange={handleinputpass2} value={userpass2}></input>
                </div>
                <button className="bg-[#FCA201] border rounded-md w-24 py-1 font-medium" onClick={add_user}>SignUp</button>
                <p className="my-1">Already have an account? <Link to={'/'} className='underline'>Login</Link></p>
            </div>
        </div>
    )
}

export default Siginup