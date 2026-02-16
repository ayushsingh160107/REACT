export default function EventToDo(){
       /* function handleClick(Name){
            alert("How dare you to touch me"+Name);
        }*/
        
        function handleSubmit(e){
            e.preventDefault();//stops page from reloading
            const input=e.target.Task;
            const inputValue=input.value.trim();
            if(inputValue===""){
                alert("Task can't be empty");
                return;
            }
            const li=document.createElement("li");
            li.innerHTML=`<span>${inputValue}</span>
            <button class="DeleteBtn">Delete</button>`;
            document.getElementById("TaskList").appendChild(li);

        }
        function handleClickList(e){
            if(e.target.className==="DeleteBtn"){
                    e.target.parentElement.remove();
            }
        }
    return(
        <>
        <h1>TO DO APP</h1>
       <form onSubmit={handleSubmit}>
            <input type="text" name="Task" placeholder="Add Your TASK Here."/>
            <button type="submit">Add Task</button>
        
            
</form>
<ul id="TaskList" onClick={handleClickList} >
            </ul>
        </>
    )
}