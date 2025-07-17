// import { CartItem } from "../types/CartItem";
import { createContext, ReactNode, useState } from "react";
import type { ProductProps } from '../pages/home';

// Define the shape of the context data
interface CartContextData { 
    cart: CartProps[]; // Array of cart items
    cartAmount: number;
    addItemCart: (newItem: ProductProps) => void; // Function to add item to cart
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

    function addItemCart(newItem: ProductProps) {
        // Adiciona no carrinho
        const indexItem = cart.findIndex(item => item.id === Number(newItem.id));

        // Se ja nao existe ele no carrinho
        if (indexItem !== -1) {
            // Se entrou aqui apenas somamos +1 na quantidade e calculamos o total desse carrinho
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount +1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            return;
        }

        // Adicionar esse item na nossa lista.
        let data = {
            ...newItem,
            id: Number(newItem.id), // Convert id to number
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
    }


    return (
        <CartContext.Provider 
            value={{
                cart, 
                cartAmount: cart.length,
                addItemCart // Expose addItemCart function
                }}
            >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;