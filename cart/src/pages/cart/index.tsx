export function Cart() {
    return (
        <div className="w-full max-w-7x1 mx-auto"> 
        <h1 className="ffont-medium text-2-1 text-center my-4">Meu carrinho</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1OO7ksAMtaXnVRiG3OW0v6TqHWoR7lvuHw&s" 
                alt="logo produto" 
                className="w-28"
            />

            <strong>Preco: R$1.000</strong>

            <div className="flex items-center justify-center gap-3">
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                    -
                </button>
                2
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                    +
                </button>
            </div>

            <strong className="float-right">
                Total: R$1.000
            </strong>
        </section>

        <p className="font-bold mt-4">Total: R$1.000</p>
        </div>
    );
};

