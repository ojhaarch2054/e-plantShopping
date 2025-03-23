import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            //plant obj
            const { name, image, cost } = action.payload;
            //check if item is arlready in cart or not
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                //if the item exist increse the qnt
                existingItem.quantity += 1;
            } else {
                //if not add to cart
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            //name of item to remove
            const itemName = action.payload
            //filter the item with matching name from item array
            state.items = state.items.filter(item => item.name !== itemName);

        },
        updateQuantity: (state, action) => {
            //extract name and qnt from payload
            const { name, quantity } = action.payload;
            //find the item by its name
            const item = state.items.find(item => item.name === name);
            //check if item exist or nt
            if (item) {
                //if yes then updateQuantity
                item.quantity = quantity
            }



        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
