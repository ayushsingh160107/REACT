import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Registration from './components/Registration.jsx'; 
function App() {
   const y=[2024,2025,2026]
   const c={name:"KIET",location:"Ghaziabad",estdyear:1998}
  return (
    <div>
    <Header title="My First React App"/>
    <Header title="Lets Explore FSD"/>
    <Registration />
    <h1>Meoww Meowww</h1>
    <h2>Welcome to React!</h2>
    <Footer year={y[2]} company={c.name} />
    </div>
  )
}

export default App
