import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const Carrinhoprovider = ({children}) => {
    
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState([]);

    return(
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal}}>
            {children}
        </CarrinhoContext.Provider>
    );
}