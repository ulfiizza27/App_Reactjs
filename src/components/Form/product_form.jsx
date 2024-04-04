import React, { useState, useEffect } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "../../assets/img/bootstrap-5-logo.webp";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account"
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  }
};

function ProductForm({ tambahProduk, produkSedangEdit, editMode, simpanEditProduk }) {
    const [formData, setFormData] = useState({
        productName: '',
        productCategory: '',
        productFreshness: '',
        productDescription: '',
        productPrice: '',
        productImage: null,
    });

    const [productNameError, setProductNameError] = useState('');
    const [language, setLanguage] = useState('en');
    const [productPriceError, setProductPriceError] = useState('');
    const [productCategoryError, setProductCategoryError] = useState('');
    const [productFreshnessError, setProductFreshnessError] = useState('');
    const [productImageError, setProductImageError] = useState('');

    useEffect(() => {
        if (produkSedangEdit) {
            setFormData(produkSedangEdit);
        }
    }, [produkSedangEdit]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        const nameRegex = /^[a-zA-Z0-9\s]+$/;
        const priceRegex = /^\d+(\.\d{1,2})?$/;

        if (name === 'productName') {
            if (!nameRegex.test(value)) {
                setProductNameError('Product Name must contain only letters, numbers, and spaces.');
            } else if (value.length > 25) {
                setProductNameError('Product Name must not exceed 25 characters.');           
            } else if (value === '') {
                setProductNameError('Please enter a valid product name.');
            } else {
                setProductNameError('');
            }
        }

        if (name === 'productPrice') {
            if (!priceRegex.test(value)) {
                setProductPriceError('Please enter a valid price.');
            } else {
                setProductPriceError('');
            }
        }

        if (name === 'productCategory') {
            if (value === '') {
                setProductCategoryError('Please select a product category.');
            } else {
                setProductCategoryError('');
            }
        }
        
        if (name === 'productFreshness') {
            if (value === '') {
                setProductFreshnessError('Please select a product freshness.');
            } else {
                setProductFreshnessError('');
            }
        }    
        
        if (name === 'productImage') {
            const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.test(files[0].name)) {
                setProductImageError('Please upload an image with JPG, JPEG, or PNG format.');
            } else {
                setProductImageError('');
            }
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        }
        
        if (type === 'file') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productNameError) {
            alert('Please fix the errors before submitting the form.');
            return;
        }
        if (formData.productName === '') {
            alert('Please enter a valid product name.');
            return;
        }
        if (!formData.productCategory) {
            setProductCategoryError('Please select a product category.');
            return;
        }
        if (!formData.productFreshness) {
            setProductFreshnessError('Please select a product freshness.');
            return;
        }
        if (editMode) {
            simpanEditProduk(formData); 
        } else {
            tambahProduk(formData);
        }
        setFormData({
            productName: '',
            productCategory: '',
            productFreshness: '',
            productDescription: '',
            productPrice: '',
            productImage: null 
        });
    };

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'id' : 'en');
    };

    return (
        <div style={{ position: 'relative' }}>
            <button type="button" className="btn" onClick={toggleLanguage} style={{ position: 'absolute', top: 0, right: 0, margin: '10px', backgroundColor: '#B0926A', color: '#fff' }}>
                {language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
            </button>
            <div className="row justify-content-center">
                <div className="col-7 text-center mt-5">
                    <img src={Image} className="img-fluid" alt="Bootstrap Logo" style={{ maxWidth: '50px' }} />
                    <h1>{article.title[language]}</h1>
                    <p>{article.description[language]}</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5">
                    <h3 className="section-content text-start mt-4 mb-4">Detail Product</h3>
                    <form className="text-start" id="productForm" onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label htmlFor="productName" className="form-label">Product Name:</label>
                            <input type="text" className="form-control" id="productName" name="productName" minLength="6" maxLength="50" value={formData.productName} onChange={handleChange} required />
                            {productNameError && <small className="text-danger">{productNameError}</small>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="productCategory" className="form-label">Product Category:</label>
                            <select className="form-select" id="productCategory" name="productCategory" value={formData.productCategory} onChange={handleChange} required>
                                <option value="">Choose...</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                            </select>
                            {productCategoryError && <small className="text-danger">{productCategoryError}</small>}
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="productImage" className="form-label">Image of Product</label>
                            <div className="input-group custom-file-button">
                                <input type="file" className="form-control border border-1 border-primary bg-primary text-white" id="productImage" name="productImage" onChange={handleChange} required />
                            </div>
                            {productImageError && <small className="text-danger">{productImageError}</small>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Product Freshness:</label><br />
                            <div>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="brandNew" name="productFreshness" value="brandNew" checked={formData.productFreshness === 'brandNew'} onChange={handleChange} required />
                                        <label className="form-check-label" htmlFor="brandNew">Brand New</label>
                                    </div>
                                </div>
                                <div>
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="secondHand" name="productFreshness" value="secondHand" checked={formData.productFreshness === 'secondHand'} onChange={handleChange} required />
                                        <label className="form-check-label" htmlFor="secondHand">Second Hand</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="refurbished" name="productFreshness" value="refurbished" checked={formData.productFreshness === 'refurbished'} onChange={handleChange} required />
                                        <label className="form-check-label" htmlFor="refurbished">Refurbished</label>
                                    </div>
                                </div>
                            </div>
                            {productFreshnessError && <small className="text-danger">{productFreshnessError}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDescription" className="form-label">Additional Description</label>
                            <textarea className="form-control" id="productDescription" name="productDescription" rows="3" value={formData.productDescription} onChange={handleChange} required></textarea>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="productPrice" className="form-label">Product Price:</label>
                            <input type="number" className="form-control" id="productPrice" name="productPrice" step="any" placeholder="Rp" value={formData.productPrice} onChange={handleChange} required />
                            {productPriceError && <small className="text-danger">{productPriceError}</small>}
                        </div>
                        {/* <button type="button" className="btn btn-secondary mb-4" style={{ transition: "background-color 0.3s", ":hover": { backgroundColor: "#6c757d"} }} onClick={handleRandomNumber}>Generate Random Number</button> */}
                        <button type="submit" className="btn btn-primary container-fluid mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductForm;