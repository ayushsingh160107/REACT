export function EventToDo(props){
    // function handleClick(){
    //     alert(`Button clicked! ${props.title}`)
    // }
    function handleSubmit(e){//e is the event object which is passed to the event handler function when the event occurs. It contains information about the event, such as the type of event, the target element, and other relevant details.
        e.preventDefault(); 
        const input=e.target.value
        const inputValue=input.trim()
        if(inputValue==""){
        alert("Task can not be empty");
        return;
        }
        const li=document.createElement("li")
        li.innerHTML=<span>${inputValue}</span>
    }
    return(
        <div>
            <h1>Event Handling</h1>
            <button onClick={() => alert(`Button clicked! ${props.title}`)}>Click me</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Enter something"/>
                <input type="submit">Add Task</input> 
            </form>
            <ul id=" TASK LIST" onClick={handleClickList}>
                    <li>Task 1</li>
                    <li>Task 2</li>
            </ul>
        </div>
    )
}