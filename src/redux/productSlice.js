import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
        {
            id: uuidv4(),
            productName: 'Laskar Pelangi',
            productCategory: 'Books',
            productFreshness: 'Second Hand',
            productDescription: 'Description 1 for Book',
            productPrice: 15,
            productImage: null
        },
        {
            id: uuidv4(),
            productName: 'Bumi Manusia',
            productCategory: 'Books',
            productFreshness: 'Brand New',
            productDescription: 'Description 2 for Book',
            productPrice: 25,
            productImage: null 
        },
        {
            id: uuidv4(),
            productName: 'T-Shirt Erigo',
            productCategory: 'Clothing',
            productFreshness: 'Refurbished',
            productDescription: 'Description for Clothing',
            productPrice: 30,
            productImage: null
        },
        {
            id: uuidv4(),
            productName: 'Smart TV',
            productCategory: 'Electronics',
            productFreshness: 'Brand New',
            productDescription: 'Description for Electronics',
            productPrice: 40,
            productImage: null 
        }
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    editProduct: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
