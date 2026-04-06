import "./Header.css"
export default function Header() {
    return(
        <>   
        <header className="header">
            <div className="left">
                <div className="logo">U</div>
                <h2>Univentures</h2>
            </div>
    
            <div className="right">
                <a href="#">Explore</a>
                <button className="submit">Submit Pitch</button>
                <button className="login">Login</button>
            </div>
        </header>
        </>
    );
}