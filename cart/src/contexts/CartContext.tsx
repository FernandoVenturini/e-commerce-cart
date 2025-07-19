// import { CartItem } from "../types/CartItem";
import { createContext, ReactNode, useState } from "react";
import type { ProductProps } from '../pages/home';

// Define the shape of the context data
interface CartContextData { 
    cart: CartProps[]; // Array of cart items
    cartAmount: number;
    addItemCart: (newItem: ProductProps) => void; // Function to add item to cart
    removeItemCart: (product: CartProps) => void;
    total: string;
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

// Props for CartProvider component
interface CartProviderProps { 
    children: ReactNode; // Define the children prop type
}

// Create the CartContext with an empty object as default value:
export const CartContext = createContext({} as CartContextData); 

function CartProvider({children}: CartProviderProps) { // CartProvider component
    // Use useState to manage the cart state:
    const [cart, setCart] = useState<CartProps[]>([]); // Array of cart items
    // Use useState to manage the total price of the cart:
    const [total, setTotal] = useState(""); // Total price of the cart as a string

    // Function to add an item to the cart
    // It takes a new item of type ProductProps as an argument
    function addItemCart(newItem: ProductProps) { // newItem is of type ProductProps
        // Adiciona no carrinho
        const indexItem = cart.findIndex(item => item.id === Number(newItem.id)); // Find the index of the item in the cart by its id
        
        // If the item already exists in the cart, indexItem will be >= 0
        if (indexItem !== -1) { // Check if the item is already in the cart
            // Se entrou aqui apenas somamos +1 na quantidade e calculamos o total desse carrinho
            let cartList = cart; // Get the current cart items
            cartList[indexItem].amount = cartList[indexItem].amount + 1; // Increment the amount of the item
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price; // Calculate the new total for the item
            // Update the cart state with the modified cartList
            setCart(cartList); // Update the cart state with the modified cartList
            // Calculate the total price of the cart
            totalResultCart(cartList); // Update the total price of the cart
            // Exit the function early since the item was already in the cart
            return; // Exit the function early
        };

        // Adicionar esse item na nossa lista.
        let data = { // Create a new cart item object
            ...newItem, // Spread the properties of newItem
            // Ensure id is a number, as it might be a string from the ProductProps
            id: Number(newItem.id), // Convert id to number
            amount: 1, // Set initial amount to 1
            total: newItem.price // Set the total price for this item
        };

        setCart(products => [...products, data]); // Update the cart state by adding the new item
        totalResultCart([...cart, data]); // Calculate the total price of the cart with the new item added
    };

    // Function to remove an item from the cart:
    function removeItemCart(product: CartProps) { // product is of type CartProps
        // Remove item do carrinho
        const indexItem = cart.findIndex(item => item.id === product.id); // Find the index of the item in the cart by its id

        if (cart[indexItem]?.amount > 1) { // Check if the item exists and its amount is greater than 1
            // If the item exists and its amount is greater than 1, decrement the amount
            let cartList = cart; // Get the current cart items

            cartList[indexItem].amount = cartList[indexItem].amount - 1; // Decrement the amount of the item
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price; // Calculate the new total for the item

            setCart(cartList); // Update the cart state with the modified cartList
            totalResultCart(cartList); // Calculate the total price of the cart after decrementing the item
            return; // Exit the function early since we just decremented the amount
        };

        const removeItem = cart.filter(item => item.id !== product.id); // Filter out the item to be removed from the cart
        // Update the cart state with the filtered items
            setCart(removeItem); // Update the cart state with the filtered items
            totalResultCart(removeItem); // Calculate the total price of the cart after removing the item
    };

    function totalResultCart(items: CartProps[]) {
            let myCart = items;
            let result = myCart.reduce((acumulador, obj) => acumulador + obj.total, 0);
            const resultFormated = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
            setTotal(resultFormated);
        }


    return (
        <CartContext.Provider 
            value={{
                cart, 
                cartAmount: cart.length,
                addItemCart, // Expose addItemCart function
                removeItemCart,
                total
                }}
            >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;