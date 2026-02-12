export function UserCard(data) {
    return(
        <div className="card">
            <h4>Name:{data.name}</h4>
            <p>Role:{data.role}</p>
            <p>Country:{data.country}</p>
            
        </div>
    )
}   