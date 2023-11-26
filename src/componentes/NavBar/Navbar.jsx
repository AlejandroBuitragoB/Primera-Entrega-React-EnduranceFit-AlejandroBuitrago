import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const Navbar = () => {
    return (
        <header>
            <h1>Endurance-Fit</h1>

            <nav>
                <ul>
                    <li>Proteinas</li>
                    <li>Creatinas</li>
                    <li>Snacks</li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    )
}

export default Navbar
