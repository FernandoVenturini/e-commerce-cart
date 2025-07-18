import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";


export function Cart() {

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);

    return (
        <div className="w-full max-w-7x1 mx-auto p-3">
            <h1 className="ffont-medium text-2x1 text-center my-4">Meu carrinho</h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <p className="font-medium">Ops! Seu carrinho esta vazio...</p>
                    <Link
                        to="/"
                        className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
                    >
                        Acessar produtos
                    </Link>
                </div>
            )}

            {cart.map((item) => (
                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                    <img
                        src={item.cover}
                        alt={item.title}
                        className="w-28"
                    />

                    <strong>Preco: {item.price}</strong>

                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={ () => removeItemCart(item)}
                            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                            -
                        </button>
                        {item.amount}
                        <button 
                            onClick={ () => addItemCart({ ...item, id: item.id.toString(), description: item.description || "" })}
                            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                            +
                        </button>
                    </div>

                    <strong className="float-right">
                        SubTotal: {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>
            ))}

            {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
        </div>
    );
};

