import React from 'react';

export default function Filter({ setFilter, setSearchClicked }) {
    const handleInputChange = event => {
        const value = event.target.value;
        setFilter(value);
    };

    function handleButtonClick() {

    }

    return (
        <div>
            {/* <label htmlFor="search">Search:</label> */}
            <input
                type="text"
                id="search"
                onChange={handleInputChange}
                placeholder="Enter name"
            />
            <button onClick={() => setSearchClicked(true)}>Search</button>
        </div>
    );
}
