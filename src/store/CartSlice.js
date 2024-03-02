import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error('Error loading state from sessionStorage:', error);
        return [];
    }
};


const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('cart', serializedState);
    } catch (error) {
        console.error('Error saving state to sessionStorage:', error);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadState(),
    reducers: {
        add: (state, action) => {
            const Productid = action.payload.id || ' '
            const existProduct = state.find(item => item.id === Productid)
            if (existProduct) {
                alert('Already Have This Product')
            } else {
                state.push(action.payload)
            };
            saveState(state)
        },
        remove: (state, action) => {
            const newState = state.filter((item) => item.id !== action.payload);
            saveState(newState);
            return newState;
        },
    }
 



}
);

export const { add, remove, total } = cartSlice.actions;
export default cartSlice.reducer;
