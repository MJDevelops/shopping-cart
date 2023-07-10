import cartSlice from "../slices/cart";

const removeFromCartWithId = cartSlice.actions.removeFromCartWithId;
const addToCart = cartSlice.actions.addToCart;
const toggleCart = cartSlice.actions.toggleCart;

export { removeFromCartWithId, addToCart, toggleCart };
