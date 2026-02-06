import "./Header.css"
export default function Header({title}) {
    return (
        <>
        <header>
            <h1>{title}   </h1>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">US</a>
            </nav>
        </header>
        </>
    )
}