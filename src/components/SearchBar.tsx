import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ products, setProducts, childData, callback, id }: { products: any, setProducts: any, childData: string, callback: any, id: string | undefined }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const handleSearchChange = (e: { target: { value: string; }; }) => {
        const limit = 3;
        setValue(e.target.value.slice(0, limit));
        callback(e.target.value.slice(0, limit));
        if (!e.target.value) return setProducts(products)
        return childData;
    }

    function looseFocus(e: { target: { value: string; }; }) {
        e.target.value = ''
        setValue('');
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