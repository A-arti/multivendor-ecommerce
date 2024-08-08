import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdImages, IoMdCloseCircle } from "react-icons/io";

const AddProduct = () => {
    // Initial category list
    const categories = [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'Tshirt' },
        { id: 3, name: 'Mobile' },
        { id: 4, name: 'Computer' },
        { id: 5, name: 'Watch' },
        { id: 6, name: 'Pant' },
    ];

    // State to handle form input values
    const [state, setState] = useState({
        name: "",
        description: '',
        discount: '',
        price: "",
        brand: "",
        stock: ""
    });

    // Function to handle input change
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    // State to manage category selection
    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState(categories);
    const [searchValue, setSearchValue] = useState('');

    // Function to search and filter categories
    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value) {
            const srcValue = allCategory.filter(c => c.name.toLowerCase().includes(value.toLowerCase()));
            setAllCategory(srcValue);
        } else {
            setAllCategory(categories);
        }
    };

    // State to manage image uploads
    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState([]);

    // Function to handle image file selection
    const imageHandle = (e) => {
        const files = e.target.files;
        const length = files.length;
        if (length > 0) {
            setImages([...images, ...files]);
            const imageUrl = [];
            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) });
            }
            setImageShow([...imageShow, ...imageUrl]);
        }
    };

    // Function to change an image
    const changeImage = (img, index) => {
        if (img) {
            const tempImages = [...images];
            const tempUrl = [...imageShow];
            tempImages[index] = img;
            tempUrl[index] = { url: URL.createObjectURL(img) };
            setImages(tempImages);
            setImageShow(tempUrl);
        }
    };

    // Function to remove an image
    const removeImage = (i) => {
        const filteredImages = images.filter((_, index) => index !== i);
        const filteredImageUrls = imageShow.filter((_, index) => index !== i);
        setImages(filteredImages);
        setImageShow(filteredImageUrls);
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#f5f7f9] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#333] text-xl font-semibold'>Add Product</h1>
                    <Link to="/all-products" className='bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2'>All Products</Link>
                </div>

                <div>
                    <form>
                        {/* First Row: Product Name and Brand */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#636a72]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product Name</label>
                                <input
                                    className='px-4 py-2 focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                    onChange={inputHandle}
                                    value={state.name}
                                    type="text"
                                    name='name'
                                    id='name'
                                    placeholder='Product Name'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product Brand</label>
                                <input
                                    className='px-4 py-2 focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                    onChange={inputHandle}
                                    value={state.brand}
                                    type="text"
                                    name='brand'
                                    id='brand'
                                    placeholder='Brand Name'
                                />
                            </div>
                        </div>

                        {/* Second Row: Category and Stock */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#636a72]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input
                                    readOnly
                                    onClick={() => setCateShow(!cateShow)}
                                    className='px-4 py-2 focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                    value={category}
                                    type="text"
                                    id='category'
                                    placeholder='--select category--'
                                />

                                {/* Category Dropdown */}
                                <div className={`absolute top-[101%] border bg-slate-200 w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'} `}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input
                                            value={searchValue}
                                            onChange={categorySearch}
                                            className='px-3 py-1 w-full focus:border-gray-900 outline-none bg-transparent border border-slate-500 hover:border-gray-800 transparent rounded-md text-[#636a72] overflow-hidden'
                                            type="text"
                                            placeholder='search'
                                        />
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-x-scroll'>
                                        {
                                            allCategory.map((c, i) => (
                                                <span
                                                    key={c.id} // Ensure each category has a unique key
                                                    className={`px-4 py-2 hover:bg-slate-100 hover:text-slate-500 hover:border hover:rounded-sm hover:border-slate-400 w-full cursor-pointer ${category === c.name ? 'bg-white' : ''}`}
                                                    onClick={() => {
                                                        setCateShow(false);
                                                        setCategory(c.name);
                                                        setSearchValue('');
                                                        setAllCategory(categories);
                                                    }}
                                                >
                                                    {c.name}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="stock">Product Stock</label>
                                <input
                                    className='px-4 py-2 focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                    onChange={inputHandle}
                                    value={state.stock}
                                    type="text"
                                    name='stock'
                                    id='stock'
                                    placeholder='Stock'
                                />
                            </div>
                        </div>

                        {/* Third Row: Price and Discount */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#636a72]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input
                                    className='px-4 py-2  focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                    onChange={inputHandle}
                                    value={state.price}
                                    type="number"
                                    name='price'
                                    id='price'
                                    placeholder='Price'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-1 '>
                                <label htmlFor="discount">Discount</label>
                                <input
                                    className='px-4 py-2  focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                    onChange={inputHandle}
                                    value={state.discount}
                                    type="number"
                                    name='discount'
                                    id='discount'
                                    placeholder='Discount By %'
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='flex flex-col w-full gap-1 mb-5'>
                            <label htmlFor="description" className='text-[#636a72]'>Description</label>
                            <textarea
                                className='px-4 py-2 focus:border-gray-500 outline-none bg-[#fff] border border-gray-300 hover:border-gray-500 rounded-md text-[#636a72]'
                                onChange={inputHandle}
                                value={state.description}
                                name='description'
                                id='description'
                                placeholder='Description'
                                cols="10"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Image Upload Section */}
                        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#636a72] mb-4'>
                            {imageShow.map((img, i) => (
                                <div key={i} className='h-[180px] relative'>
                                    <label htmlFor={`image-${i}`}>
                                        <img className='w-full h-full rounded-sm' src={img.url} alt={`product-${i}`} />
                                    </label>
                                    <input
                                        onChange={(e) => changeImage(e.target.files[0], i)}
                                        type="file"
                                        id={`image-${i}`}
                                        className='hidden'
                                    />
                                    <span
                                        onClick={() => removeImage(i)}
                                        className='p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full'
                                    >
                                        <IoMdCloseCircle />
                                    </span>
                                </div>
                            ))}

                            {/* Add New Image Button */}
                            <label className='flex justify-center items-center flex-col h-[180px]  hover:border-gray-500 outline-none bg-[#fff] border-gray-300 cursor-pointer border border-dashed w-full text-[#636a72]' htmlFor="image">
                                <span><IoMdImages /></span>
                                <span>Select Image</span>
                            </label>
                            <input
                                className='hidden'
                                onChange={imageHandle}
                                multiple
                                type="file"
                                id='image'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
