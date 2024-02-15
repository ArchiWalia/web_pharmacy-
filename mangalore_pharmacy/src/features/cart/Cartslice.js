import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const currentItem = state.items.find(item => item.name === newItem.name);
            state.totalQuantity++;
            state.totalPrice += newItem.price;
            if (!currentItem) {
                state.items.push({
                    id: newItem.items,
                    title: newItem.price,
                    quantity: 1,
                });
            } else {
                currentItem.quantity++;
            }
        },

        removeItem(state, action) {
            const id = action.payload;
            const currentItem = state.items.find(item => item.price === price);
            if (currentItem) {
                state.totalQuantity -= currentItem.quantity;
                state.totalPrice -= currentItem.price * currentItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;