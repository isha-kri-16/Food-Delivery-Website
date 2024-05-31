import { createContext, useEffect, useState } from "react"
import { food_list  } from "../assets/assets"


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({}); 


    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {     //if the user adds items first item in the cart this stat. will execute.
            setCartItems((prev) => ({...prev, [itemId]:1}))    // new entry for our food product
        }
        else{
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
        }
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    }


//functionality for cart items total :

// const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) 
//     {
//         if (cartItems[item] > 0 ) {
//             let itemInfo = food_list.find((product) => product.id === item );
//             if (itemInfo) {
//                 totalAmount += itemInfo.price * cartItems[item];
//             }  else {
//                 console.error(`Item with ID ${item} not found in food_list` );
//             }
//         }
//     }
//     return totalAmount;
// } 






const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
            const itemInfo = food_list.find(product => product.id === itemId);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId];
            } else {
                console.error(`Item with ID ${itemId} not found in food_list`);
            }
        }
    }
    return totalAmount;
}




// useEffect(() => {
//     console.log(cartItems);
// }, [cartItems]);


    const contextValue = {
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
    }


    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider