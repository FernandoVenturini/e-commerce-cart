// import { CartItem } from "../types/CartItem";
import { createContext, ReactNode, useState } from "react";

// Define the shape of the context data
interface CartContextData { 
    cart: CartProps[]; // Array of cart items
    cartAmount: number;
}

// Define the shape of a cart item
interface CartProps { 
    id: number;
    title: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

// Create the CartContext with an empty object as default value:
export const CartContext = createContext({} as CartContextData); 

interface CartProviderProps {
    children: ReactNode; // Define the children prop type
}

function CartProvider({children}: CartProviderProps) { // CartProvider component
    // Initialize cart state:
    const [cart, setCart] = useState<CartProps[]>([]);  // Array of cart items


    return (
        <CartContext.Provider 
            value={{
                cart, 
                cartAmount : cart.length
                }}
            >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;