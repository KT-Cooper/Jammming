import React from 'react';
import './Track.css';

function Track() {
    return (
        <div data-test-id="Track" id="Track" className="Track">
            <header className="Track-header">
                <h2>Track Body</h2>
            </header>
            <body className="Track-body">
                <p>this is the body. it's blank for now</p>
            </body>
        </div>
    );
}

export default Track;