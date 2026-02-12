import { Wrapper } from "./Wrapper"
import './App.css'
import { UserCard } from "./UserCard"
import { EventToDo } from "./EventToDo"

function App() {
  // const user=[
  //   {name:"Virat Kohli",
  //     role:"Batsman",
  //     country:"India",
  //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkz-CtfvMGgRgdHNQsxEMfsV37rycmXyYn4jbyBlVnEZZ-edxrgDlTl1Rbfo6teEkc2zsRuzlDUSc71RWUp5JtoegBcvnZPuUMwRmkDw&s=10"
  //   },
  //   {
  //     name:"Dhoni",
  //     role:"Wicket Keeper",
  //     country:"India",
  //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVH8oEKh5waEfovs4xpnHnBZBWHpYY2QdNA&s"
  //   }
  // ]

  return (
    <>
      <div>
        {/* <h1>USER DASHBOARD</h1>
        <Wrapper title="User List">
        {user.map((u) => (
          <UserCard data={u}/>
        ))}
        </Wrapper> */}
        <EventToDo title="Ayush"/>
      </div>
    </>
  )
}

export default App
