import { createContext, useState, useEffect } from "react"; 
import { dummydata } from "../dummydata";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [cartCount,setCartCount] = useState(0);
    const incCartCount = () => {
    setCartCount(prevCount => prevCount + 1);
}

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) { 
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else { 
        const updatedCart = { ...cartItems };
        delete updatedCart[itemId];
        setCartItems(updatedCart);
        setCartCount(prevCount => prevCount - 1);
    }
};

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                 let itemInfo= dummydata.find((product)=>product.id===Number(item))
            totalAmount+=itemInfo.price*cartItems[item];
            }
           
        }
        return totalAmount;
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        dummydata,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        incCartCount,
        cartCount
    }

    return (
        <StoreContext.Provider value={contextValue}> 
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;