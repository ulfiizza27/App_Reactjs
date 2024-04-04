import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ProductTable({ products, hapusProduk, editProduk }) {
    const navigate = useNavigate();

    const konfirmasiHapus = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
            hapusProduk(id);
        }
    };

    const handleEdit = (id) => {
        editProduk(id);
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-10">
                <h3 className="section-content text-end mb-4">List Product</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={{ border: 'none' }}>No</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Product Image</th>
                            <th>Product Freshness</th>
                            {/* <th>Additional Description</th> */}
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={uuidv4()}>
                            <td>
                                <button onClick={() => navigate(`/product/${product.id}`)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                    {1000 + index + 1}
                                </button>
                            </td>
                            <td>{product.productName}</td>
                            <td>{product.productCategory}</td>
                            <td>
                                {product.productImage && <img src={URL.createObjectURL(product.productImage)} alt="Product" style={{ width: '50px', height: '50px' }} />}
                            </td>
                            <td>{product.productFreshness}</td>
                            {/* <td>{produk.productDescription}</td> */}
                            <td>{product.productPrice}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => konfirmasiHapus(product.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => handleEdit(product.id)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductTable;