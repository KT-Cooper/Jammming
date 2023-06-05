import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div data-test-id="SearchBar" id="SearchBar" className="SearchBar">
            <header className="SearchBar-header">
                <h2>Search Bar</h2>
            </header>
            <body className="SearchBar-body">
                <p>this is the body. it's blank for now</p>
                <button>Search</button>
            </body>
        </div>
    );
}

export default SearchBar;