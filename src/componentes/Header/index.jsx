

import { Link } from 'react-router-dom'
import './style.css'
function Header() {
    return (
        <header>
            <h1>Avaliação Profº Renan</h1>
         <Link to='/'>
         <button>
            Home
         </button>
         </Link>
            
            
        </header>
    )
}
export default Header