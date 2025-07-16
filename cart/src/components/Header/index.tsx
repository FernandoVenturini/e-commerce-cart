// importing Link from react-router-dom for navigation
import { Link } from "react-router-dom";
// importing an icon from react-icons
import { FiShoppingCart } from "react-icons/fi"; 

export function Header() { // Header component
    // This component renders a header with a title and an icon
    return (
        <header className="w-full px-1 bg-slate-200">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
                {/* Logo and title linking to home page */}
                <Link to="/" className="font-bold text-2xl">
                    <h1>Dev Shop</h1>
                </Link>

                {/* Cart icon linking to cart page */}
                <Link to="/cart" className="relative">
                    <FiShoppingCart size={24}  color="#121212"/>
                    <span className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">2</span>
                </Link>
            </nav>
        </header>
    );
};

