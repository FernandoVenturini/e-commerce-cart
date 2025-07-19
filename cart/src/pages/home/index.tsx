// importing useEffect and useState from react
import { useEffect, useState, useContext } from "react";
// importing the cart icon from react-icons
import { BsCartPlus } from "react-icons/bs";
// importing the api service
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";

// Defining the structure of a product:
export interface ProductProps {
    // Defining the properties of a product:
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() { // exporting the Home component
    const { addItemCart } = useContext(CartContext);

    // Using useState to manage the products state:
    const [products, setProducts] = useState<ProductProps[]>([]); // initializing products as an empty array of ProductProps

    useEffect(() => { // using useEffect to fetch products when the component mounts
        async function getProducts() {// Defining an asynchronous function to fetch products from the API
            const response = await api.get('/products'); // making a GET request to the /products endpoint
            setProducts(response.data); // updating the products state with the fetched data
        }
        getProducts(); // calling the getProducts function to fetch the products
    }, []); // the empty dependency array means this effect runs only once when the component mounts

    function handleAddCartItem(product: ProductProps) { // function to handle adding an item to the cart
        toast.success("Produto adicionado ao carrinho!", {
            duration: 3000, // setting the duration of the toast message to 3 seconds
            position: "top-center", // setting the position of the toast message to top center
            style: {
                backgroundColor: "#4ade80", // setting the background color of the toast message to a green shade
                color: "#fff", // setting the text color of the toast message to white
                fontWeight: "bold", // setting the font weight of the toast message to bold
                fontSize: "16px", // setting the font size of the toast message to 16px
                borderRadius: "8px", // setting the border radius of the toast message to 8px
                padding: "16px", // setting the padding of the toast message to 16px
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // adding a subtle shadow to the toast message
            },
        }); // showing a success toast message
        addItemCart(product); // calling the addItemCart function from CartContext to add the product to the cart
    };

    return (
        <div>
            <main className="w-full max-w-7x1 px-4 mx-auto">
                <h1 className="font-bold text-2x1 mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                    {products.map((product) => (
                        <section key={product.id} className="w-full border-separate border border-zinc-200 rounded-lg p-4 flex flex-col items-center">
                            <img
                                className="w-full rounded-lg max-h-70 mb-2 "
                                src={product.cover} // using product cover for image source
                                alt={product.title} // using product title for alt text
                            />

                            <p className="font-medium mt-1 mb-2">{product.title}</p>

                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">
                                    {product.price.toLocaleString("pt-BR", {
                                        style: "currency", 
                                        currency: "BRL"
                                    })} 
                                </strong>
                                <button className="bg-zinc-700 p-1 rounded" onClick={() => handleAddCartItem(product)}>
                                    <BsCartPlus size={20} color="fff" />
                                    
                                </button>
                            </div>
                        </section>
                    ))};


                </div>
            </main>
        </div>
    );
};

