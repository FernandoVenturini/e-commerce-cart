// importing useEffect and useState from react
import { useEffect, useState } from "react";
// importing the cart icon from react-icons
import { BsCartPlus } from "react-icons/bs";
// importing the api service
import { api } from "../../services/api";

// Defining the structure of a product:
interface ProductProps {
    // Defining the properties of a product:
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() { // exporting the Home component

    // Using useState to manage the products state:
    const [products, setProducts] = useState<ProductProps[]>([]); // initializing products as an empty array of ProductProps

    useEffect(() => { // using useEffect to fetch products when the component mounts
        async function getProducts() {// Defining an asynchronous function to fetch products from the API
            const response = await api.get('/products'); // making a GET request to the /products endpoint
            setProducts(response.data); // updating the products state with the fetched data
        }
        getProducts(); // calling the getProducts function to fetch the products
    }, []); // the empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <main className="w-full max-w-7x1 px-4 mx-auto">
                <h1 className="font-bold text-2x1 mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                    {products.map((product) => (
                        <section key={product.id} className="w-full">
                            <img
                                className="w-full rounded-lg max-h-70 mb-2"
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
                                <button className="bg-zinc-700 p-1 rounded">
                                    <BsCartPlus size={20} color="fff" />
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </section>
                    ))};


                </div>
            </main>
        </div>
    );
};

