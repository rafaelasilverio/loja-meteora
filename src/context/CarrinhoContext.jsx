import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const Carrinhoprovider = ({children}) => {
    
    const [carrinho, setCarrinho] = useState([]);

    return(
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    );
}