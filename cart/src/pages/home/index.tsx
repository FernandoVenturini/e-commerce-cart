// importing the cart icon from react-icons
import { BsCartPlus } from "react-icons/bs";

export function Home() {
    return (
        <div>
            <main className="w-full max-w-7x1 px-4 mx-auto">
                <h1 className="font-bold text-2x1 mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                    <section className="w-full">
                        <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WnVKRVRUTFVsYThXaWkydWViL1Q3ZDZGTE9TV3RDcGJJclBqdUtzdTJYYjNHc3NlSmU2dzJyR1kxZEwyTE1neUJkRlpCNVhYU3AwTldRQldlSnpRa0NZZXAxWFNjRXhITDI1RVE5YVpyU0E" 
                            alt="fone" 
                        />

                        <p className="font-medium mt-1 mb-2">Airpods Apple</p>

                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">1000</strong>
                            <button className="bg-zinc-700 p-1 rounded">
                                <BsCartPlus size={20} color="fff"/>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </section>

                    <section className="w-full">
                        <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKRDm0Js78UrlZzPKAj6Wb7XUJZrD5_ONPA&s" 
                            alt="fone" 
                        />

                        <p className="font-medium mt-1 mb-2">JBL</p>

                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">1000</strong>
                            <button className="bg-zinc-700 p-1 rounded">
                                <BsCartPlus size={20} color="fff"/>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </section>

                    <section className="w-full">
                        <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOlW7j3MBOtaXCF1vaOzKMmeRKFNMHlnxpA&s" 
                            alt="fone" 
                        />

                        <p className="font-medium mt-1 mb-2">Keyboard mechanical</p>

                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">1000</strong>
                            <button className="bg-zinc-700 p-1 rounded">
                                <BsCartPlus size={20} color="fff"/>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </section>
                    

                </div>
            </main>
        </div>
    );
};

