import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { ProductsShowcase } from '../Interfaces';

const SearchBar = ({ products, setProducts, childData, inputValue, id }: 
    { products: ProductsShowcase, setProducts: Function, childData: string, inputValue: Function, id: string | undefined }) => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const handleSearchChange = (e: { target: { value: string; }; }) => {
        // just to limit input characters (can get read of that if database could be bigger)
        const limit = 3;

        setValue(e.target.value.slice(0, limit));
        inputValue(e.target.value.slice(0, limit));
        if (!e.target.value) return setProducts(products)
        return childData;
    }

    function looseFocus(e: { target: { value: string; }; }) {
        e.target.value = ''
        setValue('');
    }

    function handleFocus() {
        navigate(`/`)
    }

    return (
        <header className="search_container">
            {id}
            <form className="search_container-inner" onSubmit={handleSubmit}>
                <input
                    className='main_input'
                    type="number"
                    placeholder='Type product ID'
                    value={value}
                    onFocus={handleFocus}
                    onChange={handleSearchChange}
                    onSubmit={handleSubmit}
                    onBlur={looseFocus}
                />

                <button className="search_button" onClick={handleSubmit}>
                    <p className="search_button-icon"><BiSearch /></p>
                </button>
            </form>
        </header>
    )
}

export default SearchBar