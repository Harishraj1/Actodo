import ToDoItem from "./ToDoItem"

function ToDoList(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div className="bg-[#BDB4DA] border rounded-md p-4 grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length==0? <p>You haven't added any activity yet</p>:""}
           
            {
                activityArr.map(function(item){
                    return <ToDoItem item={item} activityArr={activityArr} setactivityArr={setactivityArr}/>
                })
            }
        </div>
    )
}

export default ToDoList