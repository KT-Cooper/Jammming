import React from 'react';
import './SearchResults.css';

function SearchResults({ src, search}) {
    return (
        <div data-test-id="SearchResults" id="SearchResults" className="SearchResults">
            <header className="SearchResults-header">
                <h2>Results</h2>
            </header>
            <body className="SearchResults-body">
                <p>this is the body. it's blank for now</p>
            </body>
        </div>
    );
}

export default SearchResults;