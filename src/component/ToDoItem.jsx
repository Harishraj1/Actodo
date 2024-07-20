function ToDoItem(props){

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handledelete(delete_id){
        var temparr = activityArr.filter(function(item){
            if (item.id == delete_id){
                return false
            } 
            else{
                return true
            }
        })
        setactivityArr(temparr)
    }

    return(
        <div className="flex justify-between">
            <p className="py-1">{props.item.id}. {props.item.activity}</p>
            <button className="text-red-500" onClick={()=>handledelete(props.item.id)}>Delete</button>
        </div>
    )
}

export default ToDoItem