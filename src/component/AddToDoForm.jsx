import { useState } from "react"

function AddToDoForm(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    const [inputt,setinputt] = useState("")

    function handlechange(event){
        setinputt(event.target.value)
    }
    function addlist(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:inputt}])
        setinputt("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" className="border border-black bg-transparent rounded-sm p-1" placeholder="Next activity..?" value={inputt} onChange={handlechange}></input>
                <button className="bg-black text-white p-1 border border-black" onClick={addlist}>Add</button>
            </div>
        </div>
    )
}

export default AddToDoForm