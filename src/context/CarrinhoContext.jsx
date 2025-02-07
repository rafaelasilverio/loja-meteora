import { createContext } from "react";

export const CarrinhoContext = createContext();

export const Carrinhoprovider = ({children}) => {
    return(
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    );
}