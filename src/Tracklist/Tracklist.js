import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist() {
    return (
        <div data-test-id="Tracklist" id="Tracklist" className="Tracklist">
            <header className="Tracklist-header">
                <h2>Tracklist</h2>
            </header>
            <body className="Tracklist-body">
                <p>Body text</p>
                <Track></Track>
            </body>
        </div>
    );
}

export default Tracklist;