import AddToDoForm from "./AddToDoForm"
import { useState } from "react"
import ToDoList from "./ToDoList"

function TodoContainer() {

    const [activityArr,setactivityArr] = useState([
        {
            id: 1,
            activity:"Go for a walk"
        },
        {
            id: 2,
            activity: "have break-fast"
        }
    ])

    return (
        <div>

            <div className="flex gap-5 flex-wrap">
                <AddToDoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <ToDoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>
    )
}

export default TodoContainer