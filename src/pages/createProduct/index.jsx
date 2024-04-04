import Navbar from "../../components/Navbar";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, editProduct } from '../../redux/productSlice';
import ProductForm from '../../components/Form/product_form';
import ProductTable from '../../components/Form/product_table';

export default function CreateProduct() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [produkSedangEdit, setProdukSedangEdit] = useState(null); 
  const [editMode, setEditMode] = useState(false); 

  const tambahProduk = (dataProduk) => {
    dispatch(addProduct(dataProduk));
  };

  const hapusProduk = (id) => {
    dispatch(deleteProduct(id));
  };

  const editProduk = (id) => {
    const editedProduct = products.find(product => product.id === id); 
    setProdukSedangEdit(editedProduct);
    setEditMode(true); 
  };

  const simpanEditProduk = (editedProduct) => {
    dispatch(editProduct(editedProduct));
    setEditMode(false); 
    setProdukSedangEdit(null); 
  };

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <ProductForm
                    tambahProduk={tambahProduk}
                    produkSedangEdit={produkSedangEdit}
                    editMode={editMode}
                    simpanEditProduk={simpanEditProduk}
                />
                <ProductTable products={products} hapusProduk={hapusProduk} editProduk={editProduk} />
            </div>
        </>
    );
}