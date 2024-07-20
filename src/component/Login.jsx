import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

function Login(props){

    const navigate = useNavigate()
    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")
    const [crt,setcrt] = useState(true)

    const user = props.user

    function handlenamechange(event){
        setusername(event.target.value)
    }
    function handlepasschange(event){
        setpassword(event.target.value)
    }
    function checkuser(){

        var userfound = false

        user.forEach(function(item){
            if(item.username == username && item.password == password){
                console.log("crt")
                setcrt(true)
                userfound = true
                navigate("/landing",{state:{name:username}} )
                setusername("")
                setpassword("")
            }
        })
        if(userfound===false){
            console.log("Fail")
            setcrt(false)
        }
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hii!</h1>
                {crt?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please signup before you login :(</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input className="bg-transparent border rounded-md border-black w-52 p-1" placeholder="Username" onChange={handlenamechange} value={username}></input>
                    <input className="bg-transparent border rounded-md border-black w-52 p-1" placeholder="Passsword" onChange={handlepasschange} value={password}></input>
                </div>
                <button className="bg-[#8272DA] w-24 border rounded-md p-1 font-medium my-2" onClick={checkuser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login